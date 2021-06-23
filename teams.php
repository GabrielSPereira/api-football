<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Times</title>

  <link rel="stylesheet" href="assets/styles/teams.css"> 
</head>
<body>

  <?php
    $curl = curl_init();

    curl_setopt_array($curl, [
      CURLOPT_URL => "https://api-football-v1.p.rapidapi.com/v3/teams?name=Palmeiras",
      CURLOPT_CUSTOMREQUEST => "GET",
      CURLOPT_HTTPHEADER => [
        "x-rapidapi-host: api-football-v1.p.rapidapi.com",
        "x-rapidapi-key: 5f24625205msh7220a67930e7cd0p1a6bb8jsn78ee6010eedc"
      ],
    ]);

    curl_setopt($curl, CURLOPT_FOLLOWLOCATION, TRUE);
    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    
    $response = curl_exec($curl);
    $err = curl_error($curl);
    
    $datasearch = json_decode($response, true);
    $nome = $datasearch["parameters"]["name"];
    curl_close($curl);
    
    if ($err) {
      echo "cURL Error #:" . $err;
    } 
  ?>
  <header id="main-header">
    <div class="content">
      <div class="side">
        <input type="text" placeholder="Search">
      </div>
    </div>
  </header>

  <div class="banner">
    <h1><?php echo $nome; ?></h1>
  </div>
</body>
</html>