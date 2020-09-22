import React, { useEffect, useState, useContext, useReducer, useRef } from 'react'
import styles from "./hello.module.css"
/** @jsx jsx */
import { jsx } from '@emotion/core'
import moment from "moment"
import log from 'loglevel'
log.setLevel("debug")

const setupLogs = () => {
  if(process.env.REACT_APP_ENV === "production"){
    log.setLevel("debug")
    log.debug("The logs have been disabled in production build.");
    log.setLevel("warn")
  } else {
    log.setLevel("debug")
    log.debug("The logs have been enabled in development build.");
  }
}

function Hello (props) {
  const fnName = "Hello";
  useEffect(() => {
    setupLogs();
    log.debug(`${fnName} - useEffect`, { props, styles, process })
    import("./hello-split.js").then(math => {
      log.debug("dynamic import of hello-split.js has completed.", {result: math.add(16, 26)});
    });
  }, [])
  return (
    <div
      css={{
        color: 'hotpink'
      }}
    >
      <h3>Hello world!! {(new moment()).toISOString()}</h3>
    </div>
  )
}

export {
  Hello
}

