import React, { useEffect, useState } from "react";
import Footer from './Footer';
import Container from '@material-ui/core/Container';
import { appName, objectURL } from '../settings.js';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Button, CardActionArea, CircularProgress, Divider, Typography } from '@material-ui/core';
import RoomIcon from '@material-ui/icons/Room';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import { contractAddress } from '../settings';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import Slider from '@material-ui/core/Slider';
import QRPopup from './QRPopup';
import Account from './Account';
import { useTezos, useReady, useConnect, useAccountPkh } from '../dapp';
import { UnitValue } from '@taquito/taquito';

const getDurationLabel = (x,i) => {
  var min = Math.floor(x);
  var sec = (2*x) % 2;
  var lbl = min.toString() + ((sec === 0)? '': '½');
  return lbl;
}

const SwitchOn = (props) => {
  const tezos = useTezos();
  const [duration, setDuration] = useState(0);
  const [disable, setDisable] = useState(false);
  const handleStart = (event) => {
    tezos.wallet.at(contractAddress).then(contract => {
      var price = (props.switch.rate * duration).toFixed(6);
      console.log(`calling start with ${price} XTZ`);
      contract.methods.start(UnitValue).send({ amount : price, fee : '0.1' }).then( op => {
        var start = Date.now();
        console.log(`waiting for ${op.opHash} to be confirmed`);
        setDisable(true);
        props.openSnack();
        op.receipt().then(() => {
          setDisable(false);
          props.closeSnack();
          props.resetBalance();
          props.loadSwitchContent();
        });
      })
    });
  }
  const handleDuration = (event) => {
    setDuration(event.target.innerText)
  }
  return (
    <Grid container
      direction="row"
      justify="center"
      alignItems="center"
      spacing={2}
      style={{ padding: 12, paddingLeft: 20, marginTop: 40 }}>
      <Grid item xs={1}>
        <QueryBuilderIcon />
      </Grid>
      <Grid item xs={11} style={{ paddingRight: 30 }}>
        <Slider
          defaultValue={0}
          aria-labelledby="discrete-slider-small-steps"
          step={0.5}
          marks
          min={0}
          max={15}
          valueLabelDisplay='on'
          color='secondary'
          onChangeCommitted={handleDuration}
          disabled={disable}
        />
      </Grid>
      <Grid item xs={12} style={{ textAlign: 'center', marginTop: 0 }}>
        <Typography color="textSecondary">Price for {getDurationLabel(duration)} minute(s):</Typography>
      </Grid>
      <Grid item xs={12} style={{ textAlign: 'center' }}>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item>
            <Typography variant='h6'>{ (props.switch.rate * duration).toFixed(2) }</Typography>
          </Grid>
          <Grid item>
            <Typography color="textSecondary" style={{ marginLeft: 10}}>XTZ</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item style={{ marginBottom: 20, marginTop: 36 }}>
        <Button
          variant="contained"
          color="secondary"
          disableElevation
          onClick={handleStart}
          disabled={disable}
        >
          switch on
        </Button>
      </Grid>
    </Grid>)
}

const calculateTimeLeft = (difference) => {
  let timeLeft = {};
  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  }
  return timeLeft;
}

const Charging = (props) => {
  const tezos = useTezos();
  const [timeLeft,setTimeLeft] = useState(calculateTimeLeft(props.dateofstop - Date.now()));
  const [disable, setDisable] = useState(false);
  useEffect(() => {
    const timer=setTimeout(() => {
      setTimeLeft(calculateTimeLeft(props.dateofstop - Date.now()));
    }, 1000);
    // Clear timeout if the component is unmounted
    return () => {
      clearTimeout(timer);
    }
  });
  const percentComplete = Math.floor(100 * (Date.now() - props.dateofstart) / (props.dateofstop - props.dateofstart));
  const timerComponents = [];
  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }
    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  })
  const handleInterrupt = () => {
    tezos.wallet.at(contractAddress).then(contract => {
      contract.methods.interrupt(UnitValue).send().then( op => {
        var d = Date.now();
        console.log(`waiting for ${op.opHash} to be confirmed`);
        setDisable(true);
        props.openSnack();
        op.receipt().then(() => {
          setDisable(false);
          props.closeSnack();
          props.resetBalance();
          props.setBCSwitch({
            dateofstart: d,
            dateofstop: d,
            rate: props.switch.rate,
            user: props.switch.user
          });
        });
      })
    });
  }
  if (timerComponents.length === 0) {
    var d = Date.now();
    props.setBCSwitch({
      dateofstart: d,
      dateofstop: d,
      rate: props.switch.rate,
      user: props.switch.user
    });
  }

  return (
    <Grid container
      direction="row"
      justify="center"
      alignItems="center"
      spacing={2}
      style={{ padding: 12, paddingLeft: 20, marginTop: 0 }}>
      <Grid item xs={12} style={{ textAlign: 'center' }}>
        <CircularProgress
        style={{ position: 'relative', left: '50px' }}
          variant='static'
          value='100'
          size={100}
          thickness={5}
          color='primary'>
        </CircularProgress>
        <CircularProgress
          style={{ position: 'relative', left: '-50px' }}
          variant='static'
          value={percentComplete}
          size={100}
          thickness={5}
          color="secondary">
        </CircularProgress>
        <Typography variant='h6' color='secondary' style={{ position: 'relative', top: '-70px', left: '5px' }}>
          {percentComplete}%
        </Typography>
      </Grid>
      <Grid item xs={12} style={{ textAlign: 'center' }}>
        <Typography>
          Time remaining: {timerComponents.length ? timerComponents : <span>Time's up!</span>}
        </Typography>
      </Grid>
      <Grid item>
        <Button
          style={{ margin: 20 }}
          variant="outlined"
          color="inherit"
          disableElevation
          onClick={handleInterrupt}
          disabled={disable}
        >
          interrupt
        </Button>
      </Grid>
    </Grid>
  )
}

const Busy = (props) => {
  const [timeLeft,setTimeLeft] = useState(calculateTimeLeft(props.dateofstop - Date.now()));
  useEffect(() => {
    const timer=setTimeout(() => {
      setTimeLeft(calculateTimeLeft(props.dateofstop - Date.now()));
    }, 1000);
    // Clear timeout if the component is unmounted
    return () => {
      clearTimeout(timer);
    }
  });
  const timerComponents = [];
  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }
    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  })
  const handleInterrupt = () => {
    var d = Date.now();
    props.setBCSwitch({
      dateofstart: d,
      dateofstop: d,
      rate: props.switch.rate,
      user: props.switch.user
    });
  }
  if (timerComponents.length === 0) {
    handleInterrupt();
  }
  return (
    <Container style={{ height: 301 }}>
      <Grid container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={2}
        style={{ padding: 12, paddingLeft: 20, marginTop: 0 }}>
        <Grid item xs={12} style={{ textAlign: 'center' }}>
          <Typography color="textSecondary">Object has been switched on by:</Typography>
        </Grid>
        <Grid item xs={12} style={{ textAlign: 'center' }}>
          <Typography style={{ fontFamily: 'Courier Prime, monospace' }}>
            {props.user}
          </Typography>
        </Grid>
        <Grid item xs={12} style={{ textAlign: 'center' }}>
          <Typography color="textSecondary">
            Time remaining: {timerComponents.length ? timerComponents : <span>Time's up!</span>}
          </Typography>
        </Grid>
        <Grid item></Grid>
      </Grid>
    </Container>
  )
}

const ConnectToWallet = (props) => {
  return (
    <Container style={{ height: 301, backgroundImage : "url(" + process.env.PUBLIC_URL + '/wifiplug.svg)',
        backgroundRepeat  : 'no-repeat',
        backgroundPosition: 'right 50% top 50%', }}>
      <Grid container direction="row" justify="center" alignItems="center" style={{ height: 301 }}>
        <Typography color="textSecondary">Connect to Wallet to interact with object.</Typography>
      </Grid>
    </Container>
  )
}

const Switch = props => {
  const ready = useReady();
  const accountAddress = useAccountPkh();
  const [qropen, setQROpen]   = React.useState(false);
  const [balance, setBalance] = React.useState(null);

  const handleOpenQR = (event) => {
    setQROpen(true);
  }
  const handleCloseQR = (event) => {
    setQROpen(false);
  }
  const resetBalance = () => {
    setBalance(null);
  }
  const duration = props.switch.dateofstop - props.switch.dateofstart;
  const charging = (props.switch.dateofstop > Date.now()) && duration > 0;
  return (<div>
      <Container maxWidth="md" style={{
        height: 120}}>
        { (ready)? (<Account balance={balance} setBalance={setBalance}/>):(<div />) }
      </Container>
      <Container maxWidth="sm" style={{ marginBottom: 150 }}>
        <Paper>
          <Grid container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={2}
            style={{ padding: 12, paddingLeft: 20 }}>
            <Grid item xs={1}>
              <RoomIcon />
            </Grid>
            <Grid item xs={11}>
              <Typography
              style={{
                    fontFamily: 'Courier Prime, monospace',
              }}>
              {contractAddress}</Typography>
            </Grid>
            <Grid item xs={1}>
              <LocalOfferIcon />
            </Grid>
            <Grid item xs={11}>
              <Grid container direction="row" spacing={1}>
                <Grid item>
                  <Typography>{(props.switch.rate).toFixed(2)}</Typography>
                </Grid>
                <Grid item>
                  <Typography color="textSecondary"> XTZ / minute</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          {/* _______________________________________________________ */}
          <Divider></Divider>
          { (ready)? (
              (charging)? (
                (accountAddress === props.switch.user) ? (
                  <Charging
                    dateofstart={props.switch.dateofstart}
                    dateofstop={props.switch.dateofstop}
                    switch={props.switch}
                    setBCSwitch={props.setBCSwitch}
                    openSnack={props.openSnack}
                    closeSnack={props.closeSnack}
                    resetBalance={resetBalance}
                  />
                ) : (
                  <Busy
                    user={props.switch.user}
                    dateofstop={props.switch.dateofstop}
                    switch={props.switch}
                    setBCSwitch={props.setBCSwitch}
                  />
                )
              ) : (
                <SwitchOn
                  duration={duration}
                  switch={props.switch}
                  loadSwitchContent={props.loadSwitchContent}
                  openSnack={props.openSnack}
                  closeSnack={props.closeSnack}
                  resetBalance={resetBalance}
                />
              )
            ) : (
              <ConnectToWallet />
            )
          }
          {/* _______________________________________________________ */}
          <Divider></Divider>
          <CardActionArea onClick={handleOpenQR}>
            <Grid container direction="row" justify="center" alignItems="center" spacing={2} style={{ padding: 22 }}>
              <Grid item xs={2}>
                <Container style={{
                  height: 50,
                  backgroundImage : "url(" + process.env.PUBLIC_URL + '/qr' + ((props.theme.palette.type === 'dark')?'white':'black') + '.svg)',
                  backgroundRepeat  : 'no-repeat',
                }} />
              </Grid>
              <Grid item xs={10}>
                <Typography>Click here to get the Object on your Mobile Device.</Typography>
              </Grid>
            </Grid>
          </CardActionArea>
        </Paper>
      </Container>
    <QRPopup url={objectURL} open={qropen} close={handleCloseQR} theme={props.theme}/>
    <Footer appName={appName}></Footer>
  </div>)
}

export default Switch