import React from 'react'

import Footer from './Footer'


export default (props) => (
  <html lang="en">
    <head>
    	<meta charset="utf-8"/>
    	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
    	<title>Home</title>
    	<meta name="description" content="PSD to HTML5+CSS3 conversion."/>
    	<meta name="keywords" content="PSD, HTML5, CSS3"/>
    	<meta name="author" content="Vivaco" />
    	<link rel="apple-touch-icon" href="/assets/img/apple-touch-icon.jpg" />
    	<link rel="apple-touch-icon" sizes="72x72" href="/assets/img/apple-touch-icon-72x72.jpg" />
    	<link rel="apple-touch-icon" sizes="114x114" href="/assets/img/apple-touch-icon-114x114.jpg" />
    	<link rel="stylesheet" type="text/css" href="/assets/css/custom-animations.css" />
    	<link rel="stylesheet" type="text/css" href="/assets/css/style-green-color.css" />
      <link rel="stylesheet" type="text/css" href="/custom.css" />
    </head>

    <body>
      {props.children}

      <Footer />
      <script type="text/javascript" src="/assets/js/jquery-2.1.4.min.js?ver=1"></script>
      <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBfjTSRltpwX64HeHtuYlqmhR8fR_FCo5c&v=3&libraries=places"></script>
      <script type="text/javascript" src="/assets/js/bootstrap.min.js"></script>
      <script type="text/javascript" src="/assets/js/jquery.validate.min.js"></script>
      <script type="text/javascript" src="/assets/js/toastr.min.js"></script>
      <script type="text/javascript" src="/assets/js/jquery.waypoints.min.js"></script>
      <script type="text/javascript" src="/assets/js/jquery.appear.js"></script>
      <script type="text/javascript" src="/assets/js/jquery.plugin.js"></script>
      <script type="text/javascript" src="/assets/js/jquery.countTo.js"></script>
      <script type="text/javascript" src="/assets/js/masonry.pkgd.min.js"></script>
      <script type="text/javascript" src="/assets/js/modal-box.js"></script>
      <script type="text/javascript" src="/assets/js/ventcamp.js"></script>
    </body>
  </html>
)
