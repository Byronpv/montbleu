<template>
  <div>
    <footer class="foot">
      <p>Book with us <br />and enjoy special benefits</p>
      <ul>
        <li><a class="links" href="/locate">Locate</a></li>
        <li>
          <a class="links" href="https://www.apple.com/co/app-store/" target="_blank"
            >Download App</a
          >
        </li>
        <li><a class="links" href="">Guest</a></li>
      </ul>
    </footer>
  </div>
</template>
<script>
export default {
  name: "Principal",
};
</script>
<style>
.info {
  padding-top: 180px;
}

.foot {
  background: rgba(118, 164, 175, 0.459);
  padding: 0 50px;
  width: 70%;
  height: 18%;
  position: absolute;
  bottom: 20px;
  margin-left: 18%;
  margin-right: 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.foot ul {
  list-style: none;
  display: flex;
  justify-content: space-around;
}

.foot a:link {
  color: white;
}
.foot a:visited {
  color: white;
}
</style>
