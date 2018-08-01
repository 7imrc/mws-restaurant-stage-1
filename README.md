# Restaurant Reviews App

For this Udacity project, I had to take a static webpage and convert the design to be responsive on different sized displays and accessible for screen reader use.

In addition, a service worker was added to create an offline experience for the users.

## Getting Started

1. You will need a simple HTTP server, to serve up the files on your local computer.  Python can be used to do this, among others.

2. With the server up and running, visit the site `http:\\localhost:8000` to open up the Restaurant Review App's homepage.

3. You can then navigate the webpage, to find a choice of cuisine and areas within New York to dine.

### Prerequisites

1. Python can be used to act as the HTTP server.  If you do not have it installed already, then visit their [website](https://www.python.org/) to download and install the software.

2. Once the review is completed, you will need to obtain your own Google maps API key from [here](https://developers.google.com/maps/documentation/javascript/get-api-key).  Once you have done this, replace the text `YOUR_GOOGLE_MAPS_API_KEY` in `index.html` and `restaurant.html` with your own key.

### Installing

1.  In a terminal, navigate to the project's folder.

2.  Then run the HTTP server.  For example using Python 3.6, you can use the command: `py -3.6 -m http.server 8000`. If you are unsure of which version of Python you have installed already, check with the command: `python -v`.

3. In a browser, enter `http://localhost:8000`, to load the Restaurant Review app's homepage.

### Acknowledgements

The Udacity starter files for this project can be found at their [Github page](https://github.com/udacity/mws-restaurant-stage-1).  This project used the `google-maps` branch of the starter code.

Checking the accessibility of this webpage was completed using Google Lighthouse scoring, which is described [here](https://developers.google.com/web/tools/lighthouse/), utilising methods from [ARIA](https://www.w3.org/WAI/standards-guidelines/aria/).
