<template>
  <div id="submitConfig">
    <form method="POST" :action="postEndpoint">
      <div class="field">
        <label class="label" for="configName">Config Name</label>
        <div class="control">
          <input class="input" type="text" name="configName" placeholder="Stormy Night" required></input>
        </div>
      </div>
      <div class="field">
        <label class="label" for="configDescription">Config Decription (optional)</label>
        <div class="control">
          <input class="input" type="text" name="configDescription" placeholder="Flashes random keys to look like lightning" required></input>
        </div>
      </div>
      <div class="field">
        <label class="label" for="githubUrl">Github URL</label>
        <div class="control">
          <input  class="input" type="text" name="githubUrl" placeholder="https://github.com/KiiShare/kllawesome-frontend" required></input>
        </div>
      </div>
      <div class="field">
        <label class="label">Categories</label>
        <div class="control">
          <div class="select">
            <select name="category" required>
              <option selected disabled>Select Category</option>
              <option value="layouts">Layouts</option>
              <option value="animations">Animations</option>
            </select>
          </div>
        </div>
      </div>
      <div class="field">
        <label class="label">Keyboard</label>
        <div class="control">
          <div class="select">
            <select name="keyboard" required>
              <option disabled>Select Keyboard</option>
              <option selected value="ktype">K-Type</option>
            </select>
          </div>
        </div>
      </div>
      <div class="control">
        <button class="button is-link">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'SubmitConfig',
  data () {
    return {
      postEndpoint: 'https://example.com'
    }
  }
}
</script>

<style lang="scss">
#submitConfig {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #fcfcfc;
  margin-top: 60px;
  padding: 5em;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
