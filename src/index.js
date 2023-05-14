<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Soleil Weather</title>
    <link rel="stylesheet" href="src/styles.css" />

    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-aFq/bzH65dt+w6FI2ooMVUpc+21e0SRygnTpmBvdBgSdnuTN7QbdgL+OapgHtvPp"
      crossorigin="anonymous"
    />
    <script src="https://unpkg.com/axios@1.1.2/dist/axios.min.js"></script>
    <script
      src="https://kit.fontawesome.com/19bc74bf1b.js"
      crossorigin="anonymous"
    ></script>
  </head>
  <body>
    <div class="container">
      <h1>Soleil Weather App</h1>

      <div class="textbox">
        <form class="form">
          <input type="text" id="city-input" placeholder="Enter your city" />
          <input type="submit" value="Search" />
        </form>
      </div>
      <br />
      <br />
      <div class="row align-items-start">
        <div class="col">
          <i class="fa-solid fa-cloud"></i>
        </div>
        <div class="col"><span id="berlin">Berlin</span><br />10° C | F</div>
        <div class="col"></div>
        <div class="col"></div>
        <div class="col"></div>
        <div class="col"></div>
        <div class="col"></div>
        <div class="col"></div>
        <div class="col"></div>
        <div class="col">Precipitation<br />Humidity</div>
        <div class="col">10%<br />50%</div>
      </div>
      <br />
      <h6></h6>
      <br />
      <br />
      <div class="container text-center">
        <div class="row align-items-center">
          <div class="col">
            <i class="fa-solid fa-cloud-sun-rain icon"></i
            ><br />Monday<br />10°C
          </div>
          <div class="col">
            <i class="fa-solid fa-snowflake icon"></i><br />Tuesday<br />3°C
          </div>
          <div class="col">
            <i class="fa-solid fa-sun icon"></i><br />Wednesday<br />17°C
          </div>
          <div class="col">
            <i class="fa-solid fa-cloud-sun-rain icon"></i
            ><br />Thursday<br />13°C
          </div>
          <div class="col">
            <i class="fa-solid fa-cloud-rain icon"></i><br />Friday<br />9°C
          </div>
        </div>
      </div>
    </div>
    <script src="src/index.js"></script>
  </body>
</html>
