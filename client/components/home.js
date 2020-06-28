import React from 'react'
import M from 'materialize-css'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
  useEffect(() => {
    let elements = document.querySelectorAll('.parallax')
    M.Parallax.init(elements)
  }, [])
  return (
    <div>
      <div className="parallax-container">
        <div className="parallax">
          <img src="https://media.giphy.com/media/3rgXBqKTN31iaFit3i/giphy.gif" />
          <div className="center" />
        </div>
      </div>
      <div className="section black">
        <div className="row container">
          <div className="container">
            <h2 className="white-text center">Our Goal</h2>
            <p className="white-text center">
              Our minimalist application allows you to analyze your habits; We
              effectively arrange your data to give you a better idea of how to
              get the deep sleep your body deserves
            </p>
          </div>
        </div>
      </div>
      <div className="parallax-container">
        <div className="parallax">
          <img src="https://media.giphy.com/media/l1J9uvaWYWkNLjiz6/giphy.gif" />
        </div>
      </div>
      <div className="row container">
        <div className="container">
          <h2 className="white-text center">compatibile with</h2>
        </div>
      </div>
      <div className="parallax-container ">
        <div className="parallax">
          <img src="https://media.giphy.com/media/l1J9uvaWYWkNLjiz6/giphy.gif" />
        </div>
      </div>

      <div className="section center black ">
        <div className="row container" />

        <a href="https://ouraring.com/?g_acctid=553-919-5922&g_campaign=Brand%20-%20US&g_campaignid=1016078591&g_adgroupid=70823106696&g_adid=353573244635&g_keyword=oura%20ring&g_keywordid=aud-726085015901:kwd-305035554360&g_network=g&utm_source=google&utm_medium=cpc&gclid=CjwKCAjw_-D3BRBIEiwAjVMy7GhClKn5m02dS_K6Dh40GCGRN-r2TBupeESqGE3vqaY0_14G_Wh9XxoCZnYQAvD_BwE">
          <img
            height="250"
            width="410"
            src="https://images.squarespace-cdn.com/content/v1/59bf546f9f8dce7707849e73/1586839224574-SW33AIORLAYCGNCCWYVI/ke17ZwdGBToddI8pDm48kMVuQqta9v-VsmS1Jw19CflZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpw5Mplo9yO8wzUs5VRTXsxcfrrL2tjRchK7DrddUE_cPW4BDxDhoY2AiP7KZ_ioVsU/dims.png"
          />
        </a>
      </div>

      <div className="parallax-container ">
        <div className="parallax">
          <img src="https://media.giphy.com/media/xTiTnf82IsRh70ciSA/giphy.gif" />
        </div>
      </div>

      <div className="section center black ">
        <div className="row container" />

        <a href="https://www.fitbit.com/us/home?utm_source=&utm_medium=paidsearch&gclid=CjwKCAjw_-D3BRBIEiwAjVMy7EbrOpAgr-WNUR4j5mYPOAPS_XhQ3LNfFLkrCx3RAqxa8yKd2VRHfhoCJO0QAvD_BwE&gclsrc=aw.ds">
          <img
            height="280"
            width="330"
            src="https://www.gentlemansbutler.com/wp-content/uploads/2016/01/Charge-HR-Black.jpg"
          />
        </a>
      </div>

      <div className="parallax-container ">
        <div className="parallax">
          <img src="https://media.giphy.com/media/xTiTnf82IsRh70ciSA/giphy.gif" />
        </div>
      </div>

      <div className="section center black ">
        <div className="row container" />

        <a href="https://www.apple.com/watch/">
          <img
            height="200"
            width="330"
            src="https://cnet4.cbsistatic.com/img/c1TooQAmF0Mw6yL8BX5WQiGJL9Q=/470x264/2019/09/18/934f4162-0077-4852-9a1d-f4fadf88a20a/modular-compact.jpg"
          />
        </a>
      </div>

      <div className="parallax-container ">
        <div className="parallax">
          <img src="https://media.giphy.com/media/26wkvrPeNP4WO2gCY/giphy.gif" />
        </div>
      </div>

      <div className="section black">
        <div className="row container">
          <div className="container">
            <h2 className="white-text center">Easy to use</h2>
            <p className="white-text center">
              Just plug in your rem sleep time based on your devices readings as
              well as tags representing what you participated on that date.
              Compare all your data to understand what habits affect your deep
              sleep.
            </p>
          </div>
        </div>
      </div>
      <div className="parallax-container ">
        <div className="parallax">
          <img src="https://media.giphy.com/media/26wkvrPeNP4WO2gCY/giphy.gif" />
        </div>
      </div>

      <div className="section black">
        <div className="row container">
          <div className="container">
            <h2 className="white-text center">Meet the Creators</h2>
            <a href="https://www.linkedin.com/in/alex-bangiyev/">
              <h6 className="white-text center">Alex Bangiyev</h6>
            </a>
            <a href="https://www.linkedin.com/in/soham-dutta-932550181/">
              {' '}
              <h6 className="white-text center">Soham Dutta</h6>
            </a>
          </div>
        </div>
      </div>

      <div className="parallax-container">
        <div className="parallax">
          <img src="https://media.giphy.com/media/3rgXBqKTN31iaFit3i/giphy.gif" />
          <div className="center" />
        </div>
      </div>
    </div>
  )
}

export default Home
