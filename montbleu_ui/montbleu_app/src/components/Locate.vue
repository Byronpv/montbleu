<template>
  <div class="map">
      <div class="mapa">
    <iframe
      width="425"
      height="350"
      frameborder="0"
      scrolling="no"
      marginheight="0"
      marginwidth="0"
      src="https://www.openstreetmap.org/export/embed.html?bbox=-74.09082323312761%2C4.630227590916169%2C-74.08831268548967%2C4.632010783444115&amp;layer=mapnik"
      style="border: 1px solid black"
    ></iframe
    ><br /><small
      ><a href="https://www.openstreetmap.org/#map=19/4.63112/-74.08957"
        >Ver mapa más grande ✅</a
      ></small
    >
    </div>
    <div>
        <p>Carrera 38 #25-35</p>
        <p>Bogotá, CO</p>
    </div>
  </div>
</template>
<script>
export default {
    name: 'Locate'
}
</script>
<style>
.principal{
    display: none;
}

.map{
    display:flex;
    align-items: center;
    justify-content: center;
}

.mapa{
    padding: 50px 50px;
    /* border-radius: 12px; */
}

.mapa iframe{
   border-radius: 12px;
}


.mapa a:link{
  color: white;
}
.mapa a:visited{
  color: white;
}
</style>