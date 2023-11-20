import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer>

                        <div class="help-body-container">
                          <div class="for-removing" onclick="removeGuide()"></div>
  <div class="help-guide-container">
   
    <svg class="close-btn-popup" onclick="removeGuide()" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="512" height="512" x="0" y="0" viewBox="0 0 511.995 511.995" style="enable-background:new 0 0 512 512" xml:space="preserve">
      <g>
        <path d="M437.126 74.939c-99.826-99.826-262.307-99.826-362.133 0C26.637 123.314 0 187.617 0 256.005s26.637 
          132.691 74.993 181.047c49.923 49.923 115.495 74.874 181.066 74.874s131.144-24.951 181.066-74.874c99.826-99.826 
          99.826-262.268.001-362.113zM409.08 409.006c-84.375 84.375-221.667 84.375-306.042 0-40.858-40.858-63.37-95.204-63.37-153.001s22.512-112.143 63.37-153.021c84.375-84.375 
          221.667-84.355 306.042 0 84.355 84.375 84.355 221.667 0 306.022z" fill="#a9a7a7" data-original="#000000" class=""></path>
        <path d="m341.525 310.827-56.151-56.071 56.151-56.071c7.735-7.735 7.735-20.29.02-28.046-7.755-7.775-20.31-7.755-28.065-.02l-56.19 
          56.111-56.19-56.111c-7.755-7.735-20.31-7.755-28.065.02-7.735 7.755-7.735 20.31.02 28.046l56.151 56.071-56.151 56.071c-7.755 7.735-7.755 20.29-.02 
          28.046 3.868 3.887 8.965 5.811 14.043 5.811s10.155-1.944 14.023-5.792l56.19-56.111 56.19 56.111c3.868 3.868 8.945 5.792 14.023 
          5.792a19.828 19.828 0 0 0 14.043-5.811c7.733-7.756 7.733-20.311-.022-28.046z" fill="#a9a7a7" data-original="#000000" class="">
          
          </path>
      </g>
    </svg>
    <span class="upper-close-container" onclick="removeGuide()">
      <span></span>
    </span>
        <p class="size-sticky-button" onclick="sizeGuide()">SIZE CHART</p>
        <div class="help-header">
            <div class="svg">
                <svg xmlns="http://www.w3.org/2000/svg" width="32.068" height="37" viewBox="0 0 32.068 37">
                    <g id="size_guide" transform="translate(-4 -0.002)">
                      <path id="Path_9664" data-name="Path 9664" d="M35.652,10.044,30.685,2.967a2.252,2.252,0,0,0-1.006-.788L24.626.155A2.317,2.317,0,0,0,23.031.132a9.234,9.234,0,0,1-3,.485,9.227,9.227,0,0,1-3-.485,2.329,2.329,0,0,0-1.6.024L10.391,2.178a2.262,2.262,0,0,0-1.012.793L4.42,10.037a2.21,2.21,0,0,0,.53,3.112L6.467,14.2v1.759a1.85,1.85,0,0,0,1.6,1.82l1.488.206v3.569l-.413.057a3.145,3.145,0,0,0-2.67,3.041v6.121a3.074,3.074,0,0,0,2.66,3.029l22.986,3.177a1.854,1.854,0,0,0,1.475-.438,1.835,1.835,0,0,0,.63-1.381V31.526a1.85,1.85,0,0,0-1.6-1.82l-2.1-.294v-3.4l1.03-.142a3.1,3.1,0,0,0,2.67-3.041V16.708a3.039,3.039,0,0,0-1-2.235l1.9-1.323a2.208,2.208,0,0,0,.537-3.106ZM23.011,1.422A2.8,2.8,0,0,1,20.034,3.7a2.8,2.8,0,0,1-2.978-2.282,10.45,10.45,0,0,0,2.978.432,10.469,10.469,0,0,0,2.977-.429Zm-7.229-.075a4.063,4.063,0,0,0,4.251,3.587,4.062,4.062,0,0,0,4.251-3.586l4.938,1.978c.022.009.039.024.062.034V13.365l-18.5-2.557V3.36c.022-.01.04-.027.062-.036ZM5.653,12.135a.964.964,0,0,1-.405-.633.982.982,0,0,1,.178-.749L9.55,4.872v5.765L8.571,10.5A1.856,1.856,0,0,0,7.1,10.94a1.835,1.835,0,0,0-.629,1.382V12.7ZM7.7,15.963V12.324a.593.593,0,0,1,.207-.451.617.617,0,0,1,.41-.155.734.734,0,0,1,.089.006l.53.073v2.387a.617.617,0,0,0,1.233,0V11.967l1.233.171v.813a.617.617,0,0,0,1.233,0v-.643l1.233.17V14.8a.617.617,0,0,0,1.233,0V12.649l1.233.17v1.365a.617.617,0,0,0,1.233,0V12.99l1.233.17v2.257a.617.617,0,0,0,1.233,0V13.332l1.233.17v1.3a.617.617,0,1,0,1.233,0V13.673l1.233.17v2.192a.617.617,0,0,0,1.233,0V14.013l1.23.171v1.85a.617.617,0,0,0,1.233,0v-1.68l1.233.171v2.743a.617.617,0,0,0,1.233,0V14.695l1.233.171v1.785a.617.617,0,1,0,1.233,0v-1.3a1.812,1.812,0,0,1,.617,1.351v3.669a3.069,3.069,0,0,0-1.439-.59L8.23,16.562a.612.612,0,0,1-.53-.6Zm1.606,6.874L9.55,22.8v3.709L9.3,26.479a1.85,1.85,0,0,1-1.6-1.818,1.888,1.888,0,0,1,1.606-1.824Zm23.678,8.687v3.638a.593.593,0,0,1-.207.451.625.625,0,0,1-.493.147L9.294,32.585A1.837,1.837,0,0,1,7.7,30.778V27.11a3.074,3.074,0,0,0,1.233.549v2.559a.617.617,0,0,0,1.233,0V27.842l1.233.171v.972a.617.617,0,0,0,1.233,0v-.8l1.233.17v2.482a.617.617,0,1,0,1.233,0v-2.31l1.233.17v1.523a.617.617,0,0,0,1.233,0V28.866l1.233.17v2.416a.617.617,0,0,0,1.233,0V29.207l1.233.17v1.458a.617.617,0,1,0,1.233,0V29.548l1.233.17v2.35a.617.617,0,0,0,1.233,0V29.889l1.233.17v2.009a.617.617,0,0,0,1.233,0V30.23l1.233.171v2.9a.617.617,0,1,0,1.233,0V30.571l1.233.171v1.943a.617.617,0,0,0,1.233,0V30.912l.086.012a.612.612,0,0,1,.53.6Zm-22.2-4.84V18.16l18.5,2.562v8.52Zm20.594-2.035-.86.12v-3.88l.863.119a1.85,1.85,0,0,1,1.6,1.818,1.888,1.888,0,0,1-1.607,1.824ZM34.82,11.5a.964.964,0,0,1-.408.635L32.041,13.79c-.014,0-.03-.006-.044-.01a.632.632,0,0,0-.1-.023,3.166,3.166,0,0,0-.342-.078l-1.04-.144V4.872l4.132,5.886a.977.977,0,0,1,.171.744Z" transform="translate(0 0)" fill="#c9c9c9"></path>
                    </g>
                  </svg>  
            </div>
            <div class="title-help">
                <h3>WHICH FIT ARE YOU LOOKING FOR?</h3>
                <p>BLUORNG help you selecting your perfect fit as you required.</p>
            </div>
        </div>
        <div class="help-container">
            <div class="help-navigation">
            </div>
        <div class="img-container">
            <div class="img-pic">
                <img src="https://cdn.shopify.com/s/files/1/0514/9494/4962/files/size_guide_U001.png?v=1677594555" alt=""/>
                <p>REGULAR FIT (S)</p>
            </div>
            <div class="img-pic">
                <img src="https://cdn.shopify.com/s/files/1/0514/9494/4962/files/Size_Guide_002.png?v=1677593705" alt=""/>
                <p>OVERSIZED FIT (M)</p>
            </div>
        </div>
        <div class="details-container">
            <h4>WHAT IS THE KEY DIFFERENCE BETWEEN BOTH FITS?</h4>
            <p>In terms of fit, the oversized option is determined by our sizing chart. Nevertheless,
              if you prefer a regular fit, we recommend selecting a size down from your usual sizing option.</p>
        </div>
         <div class="more-q-container" onclick="window.location.href = 'https://bluorng.com/pages/contact-us';">
            <div class="more-q-heading">
                <h4>HAVE MORE QUESTIONS?</h4>
                <a href="/pages/contact-us">Feel free to reach out!</a>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="16.077" height="27.553" viewBox="0 0 16.077 27.553">
                <g id="phone_blu" transform="translate(-106.625)">
                  <path id="Path_9665" data-name="Path 9665" d="M117.8,24.813a.431.431,0,0,1-.431.431h-5.466a.431.431,0,0,1,0-.861h5.466A.431.431,0,0,1,117.8,24.813Zm4.9-22.436v22.8a2.493,2.493,0,0,1-2.59,2.376h-10.9a2.492,2.492,0,0,1-2.59-2.376V2.377A2.493,2.493,0,0,1,109.215,0h10.9a2.493,2.493,0,0,1,2.59,2.377Zm-.861,0A1.635,1.635,0,0,0,120.113.861h-2.56V1.8a.431.431,0,0,1-.431.431h-5.2a.431.431,0,0,1-.431-.431V.861h-2.275a1.634,1.634,0,0,0-1.729,1.516v22.8a1.634,1.634,0,0,0,1.729,1.515h10.9a1.634,1.634,0,0,0,1.729-1.515Z" fill="#c9c9c9"></path>
                </g>
              </svg>
        </div>
        </div>
    </div>
                  </div>

            <div class="size-body-container">
              <div class="for-removing" onclick="removeGuide()"></div>
      <div class="size-guide-container">
        <svg class="close-btn-popup" onclick="removeGuide()" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="512" height="512" x="0" y="0" viewBox="0 0 511.995 511.995" style="enable-background:new 0 0 512 512" xml:space="preserve"><g><path d="M437.126 74.939c-99.826-99.826-262.307-99.826-362.133 0C26.637 123.314 0 187.617 0 256.005s26.637 132.691 74.993 181.047c49.923 49.923 115.495 74.874 181.066 74.874s131.144-24.951 181.066-74.874c99.826-99.826 99.826-262.268.001-362.113zM409.08 409.006c-84.375 84.375-221.667 84.375-306.042 0-40.858-40.858-63.37-95.204-63.37-153.001s22.512-112.143 63.37-153.021c84.375-84.375 221.667-84.355 306.042 0 84.355 84.375 84.355 221.667 0 306.022z" fill="#a9a7a7" data-original="#000000" class=""></path><path d="m341.525 310.827-56.151-56.071 56.151-56.071c7.735-7.735 7.735-20.29.02-28.046-7.755-7.775-20.31-7.755-28.065-.02l-56.19 56.111-56.19-56.111c-7.755-7.735-20.31-7.755-28.065.02-7.735 7.755-7.735 20.31.02 28.046l56.151 56.071-56.151 56.071c-7.755 7.735-7.755 20.29-.02 28.046 3.868 3.887 8.965 5.811 14.043 5.811s10.155-1.944 14.023-5.792l56.19-56.111 56.19 56.111c3.868 3.868 8.945 5.792 14.023 5.792a19.828 19.828 0 0 0 14.043-5.811c7.733-7.756 7.733-20.311-.022-28.046z" fill="#a9a7a7" data-original="#000000" class=""></path></g></svg>
        <span class="upper-close-container" onclick="removeGuide()">
          <span></span>
        </span>
        <div class="size-header">
            <div class="svg">
                <svg xmlns="http://www.w3.org/2000/svg" width="30.623" height="34.093" viewBox="0 0 30.623 34.093">
                    <g id="mesurement" transform="translate(0 0.004)">
                      <g id="Group_491" data-name="Group 491" transform="translate(0 -0.004)">
                        <path id="Path_9659" data-name="Path 9659" d="M20.036.344A50.29,50.29,0,0,0,13.636,0C5.99,0,0,2.993,0,6.816v9.091c0,3.059,3.854,5.635,9.531,6.5q-2.5,1.8-5.032,3.541a1.133,1.133,0,0,0-.063,1.822l7.582,6.066a1.143,1.143,0,0,0,1.385.031q1.9-1.387,3.715-2.882,1.747-1.437,3.409-2.974c.006-.006.014-.008.019-.014l0-.007q1.591-1.47,3.093-3.032c.012-.011.028-.016.039-.029s.009-.019.015-.027q1.075-1.115,2.1-2.279c1.893-2.172,4.249-4.873,4.7-8.2C30.949,11.031,30.317,6,27.028,3,24.974,1.111,22.342.639,20.036.344Zm-6.4.79c6.776,0,12.5,2.6,12.5,5.682,0,3.682-7.33,5.682-12.5,5.682-6.776,0-12.5-2.6-12.5-5.682S6.861,1.135,13.636,1.135ZM1.136,15.907V9.586c2.085,2.405,6.837,4.049,12.5,4.049a23.34,23.34,0,0,0,8.745-1.548,117.006,117.006,0,0,1-11.018,8.988V18.18a.568.568,0,0,0-1.136,0v3.182A21.852,21.852,0,0,1,7.386,20.8V17.612a.568.568,0,0,0-1.136,0v2.841a13.821,13.821,0,0,1-2.273-1V15.907a.568.568,0,1,0-1.136,0v2.8A3.732,3.732,0,0,1,1.136,15.907ZM12.727,32.953,5.143,26.889q1.384-.951,2.756-1.918a2.443,2.443,0,0,0,1.686.359,1.331,1.331,0,0,1,1.6,1.153A2.465,2.465,0,0,0,13.977,28.5a1.341,1.341,0,0,1,1.6,1.158,3.115,3.115,0,0,0,.32.861q-1.555,1.256-3.171,2.435ZM29.37,14.271a8.714,8.714,0,0,1-.8,2.585l-.808-1.136a.568.568,0,1,0-.926.659l1.131,1.591a21.467,21.467,0,0,1-1.827,2.514l-1.581-1.808a.568.568,0,1,0-.856.748l1.691,1.939q-1.059,1.234-2.18,2.413l-2.386-2.045a.568.568,0,1,0-.739.863L22.425,24.6q-1.137,1.16-2.326,2.267l-2.685-2.3a.568.568,0,1,0-.739.864l2.585,2.213c-.8.723-1.623,1.432-2.463,2.131a3.31,3.31,0,0,1-.119-.394,2.459,2.459,0,0,0-2.788-2.013A1.347,1.347,0,0,1,12.287,26.2,2.448,2.448,0,0,0,9.5,24.2a2.522,2.522,0,0,1-.511,0c6.466-4.6,14.189-10.545,17.1-14.561a4.336,4.336,0,0,0,1.182-2.759c.03-1.786-1.225-3.2-2.721-4.2a7.3,7.3,0,0,1,1.718,1.151c2.772,2.535,3.555,7.069,3.1,10.439Z" transform="translate(0 0.004)" fill="#c9c9c9"></path>
                        <path id="Path_9660" data-name="Path 9660" d="M18.369,11.685c2.324,0,6.2-.667,7.2-2.773.678-1.43-.5-2.9-1.827-3.794a12.981,12.981,0,0,0-4.078-1.694,1.54,1.54,0,0,0-1.281.245,1.567,1.567,0,0,0-.518.639C13.923,4.437,11,5.985,11,7.992,11,10.671,15.475,11.685,18.369,11.685Zm4.172-1.818.2-4.038c.127.076.249.153.366.232C25.245,7.5,25.2,8.87,22.541,9.867ZM18.873,4.914V4.9a.426.426,0,0,1,.176-.313.4.4,0,0,1,.337-.066,15.355,15.355,0,0,1,2.248.746l-.249,4.947a12.835,12.835,0,0,1-2.918.332ZM17.7,5.452l-.363,5.057c-3.131-.226-5.2-1.442-5.2-2.516C12.136,6.869,14.389,5.612,17.7,5.452Z" transform="translate(-4.75 -1.456)" fill="#c9c9c9"></path>
                        <path id="Path_9661" data-name="Path 9661" d="M21.818,10a.568.568,0,0,0-.568.568v.568a.568.568,0,1,0,1.136,0v-.568A.568.568,0,0,0,21.818,10ZM15.923,31.715a.568.568,0,0,0-.71.888l2.841,2.273a.568.568,0,0,0,.71-.888Z" transform="translate(-6.477 -4.316)" fill="#c9c9c9"></path>
                      </g>
                    </g>
                  </svg>
                  
            </div>
            <div class="title-chart">
                <h3>SIZE GUIDE</h3>
                <p>BLUORNG helps you find your perfect fit.</p>
            </div>
        </div>
        <div class="guid-container">
            <div class="container-navigation">
                <p class="size-chart-table">SIZE CHART</p>
                <span class="chart-line">
                    <div class="fill-line"></div>
                </span>
            </div>
            <div class="chart-container">
              <div class="img">
                <img src="https://cdn.shopify.com/s/files/1/0514/9494/4962/files/SIZE_GUIDE_03.png?v=1677604631" alt=""/>
              </div>
              <table>
                <tbody><tr>
                  <th>SIZE</th>
                  <th>CHEST</th>
                  <th>SHOULDER</th>
                  <th>LENGTH</th>
                </tr>
                <tr>
                  <td>XXXS</td>
                  <td>39"</td>
                  <td>19.5"</td>
                  <td>26.5"</td>
                </tr>
                <tr>
                  <td>XXS</td>
                  <td>42"</td>
                  <td>20"</td>
                  <td>28"</td>
                </tr>
                <tr>
                  <td>XS</td>
                  <td>44"</td>
                  <td>20.5"</td>
                  <td>28.5"</td>
                </tr>
                <tr>
                    <td>S</td>
                    <td>46"</td>
                    <td>21"</td>
                    <td>29"</td>
                  </tr>
                  <tr>
                    <td>M</td>
                    <td>48"</td>
                    <td>21.5"</td>
                    <td>29.5"</td>
                  </tr>
                  <tr>
                    <td>L</td>
                    <td>50"</td>
                    <td>22"</td>
                    <td>30"</td>
                  </tr>
                  <tr>
                    <td>XL</td>
                    <td>52"</td>
                    <td>22.5"</td>
                    <td>30.5"</td>
                  </tr>
                  <tr>
                    <td>XXL</td>
                    <td>54"</td>
                    <td>23"</td>
                    <td>31"</td>
                  </tr>
                  <tr>
                    <td>XXXL</td>
                    <td>56"</td>
                    <td>23.5"</td>
                    <td>31"</td>
                  </tr>
              </tbody></table>
            </div>
        </div>
    </div>
                        </div>
                 

  <ul class="social">
    <li><a href="https://www.instagram.com/bluorng" target="_blank">INSTAGRAM</a></li>
    <li><a href="https://youtube.com/@BluorngYouTube" target="_blank">YOUTUBE</a></li>
    <li><a href="https://www.linkedin.com/company/bluorng/" target="_blank">LINKEDIN</a></li>
  </ul>
  <p id="footer-p">© 2023, Bluorng</p>
</footer>
    </div>
  )
}

export default Footer
