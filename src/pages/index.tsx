import React from "react";
import styles from "./index.module.scss"


export default function IndexPage() {
  return (
    <div className={(styles.index)}>
      <h1>DEMO: Fixed elements shift upwards when scrolling past Home Indicator on iOS</h1>

      <p><b>Scroll to bottom to see problem:</b></p>

      <p>In fullscreen mode for Telegram WebApp, when scrolling to the bottom of the page, the entire page
        (document/body) shifts upwards, including elements with position: fixed, such as a bottom TabBar. Consequently,
        the fixed TabBar moves up, and content rises above the Home Indicator on iOS.</p>

      <p>
        <b>Current potential solutions and their drawbacks:</b>
      </p>

      <ul>
        <li>
          If I limit the page height (body max-height: 100vh; overflow: hidden), the TabBar remains fixed, but scrolling
          to the top by tapping on the status bar no longer functions.
        </li>
        <li>
          If the body remains scrollable normally, the TabBar moves upward, negatively impacting UX.
        </li>
      </ul>

      <div className={styles.tabbar}>
        <div className={styles.item}>
          <div className={styles.icon}/>
          <div className={styles.text}>Tab 1</div>
        </div>
        <div className={styles.item}>
          <div className={styles.icon}/>
          <div className={styles.text}>Tab 2</div>
        </div>
        <div className={styles.item}>
          <div className={styles.icon}/>
          <div className={styles.text}>Tab 3</div>
        </div>
      </div>

      <div className={styles.lorem}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pharetra nec ligula quis vestibulum.
          Donec
          eros justo, sagittis in elementum a, vestibulum eu libero. Morbi et ipsum tempus, iaculis magna sed,
          pellentesque felis. Phasellus sodales tortor at luctus rutrum. Integer ut neque nec metus porta congue ac eget
          magna. Etiam laoreet ligula sit amet pretium sollicitudin. Maecenas condimentum nisi sed ante fermentum, id
          ornare lorem viverra. Nunc at nulla at est maximus pulvinar. Duis erat justo, ullamcorper a varius eget,
          dictum
          tincidunt lorem. Cras justo eros, ullamcorper nec magna eget, viverra ullamcorper eros. Maecenas auctor
          maximus
          velit, eu congue leo tincidunt a. Sed ullamcorper dapibus vulputate. Aliquam ultrices lobortis tellus, at
          fermentum nunc commodo sed.</p>

        <p>Aliquam erat volutpat. Vestibulum bibendum in ante id maximus. Quisque maximus ultricies commodo. Nam et
          ipsum
          non libero placerat rutrum. Sed condimentum condimentum bibendum. Curabitur congue libero enim, sed eleifend
          enim convallis lacinia. Maecenas vel mauris porttitor, pharetra ligula ut, mollis urna. Nunc pharetra
          ullamcorper elit eget varius.</p>

        <p>Sed faucibus, diam vel pretium vulputate, sem nisl volutpat arcu, sit amet mollis ligula diam id orci.
          Aliquam
          ut massa odio. In elementum urna sit amet neque feugiat, eget semper tortor blandit. In sagittis ultrices
          ligula
          id ornare. Cras bibendum augue non felis ornare, sit amet lobortis velit vestibulum. Duis ut arcu velit. Donec
          ut purus orci. Phasellus ut enim commodo, dapibus dolor quis, congue dolor. Nullam tristique turpis et neque
          convallis, in placerat tellus dignissim. Integer finibus facilisis nibh, in hendrerit leo condimentum sit
          amet.</p>

        <p>Aliquam commodo, metus a finibus fringilla, tortor velit rutrum justo, non varius nisl magna id purus.
          Integer
          dapibus velit id feugiat venenatis. Duis nec arcu mattis dolor sodales vulputate. Pellentesque interdum turpis
          nec tempus fermentum. Maecenas ullamcorper nisi nisi. Sed felis augue, gravida non lobortis a, fringilla sed
          sapien. Nulla viverra at tortor ut tincidunt. Duis suscipit lacus lacus, eget congue turpis pretium ac. Nam
          varius semper risus, vitae mattis tortor placerat fringilla. Sed rutrum bibendum odio semper blandit.
          Phasellus
          sed sodales dolor, a dapibus urna. Donec facilisis ipsum et tortor bibendum, id eleifend arcu pharetra.
          Quisque
          sollicitudin venenatis diam, vitae maximus tellus feugiat et. Donec a sem nec ante volutpat semper in a arcu.
          Sed iaculis tellus sollicitudin orci ullamcorper, eget luctus elit feugiat.</p>


      </div>
    </div>
  );
}
