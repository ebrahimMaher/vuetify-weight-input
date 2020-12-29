# Vuetify Weight Input
> Nice Weight input build by vue & vuetify

***[check demo by clicking here](https://ebrahimmaher.github.io/vuetify-weight-input/)***

**Table of Contents**

- [Installation](#installation)
- [Usage](#usage)
  - [Props](#props)
- [Credits & Contributors](#Credits-&-Contributors)

## Installation
- install `vuetify-weight-input`
```bash
  npm install vuetify-weight-input
```
## Usage
### import and use component
```
import VWeightInput from 'vuetify-weight-input';
> View all available options in [Props](#props).

Use the `vuetify-weight-input` component:

  ```html
  <template>
    <vuetify-weight-input outlined v-model="weight"></vuetify-weight-input>
  <template>

  <script>
  export default {
    components: {VWeightInput},
    data() {
      return {
        weight: null
      }
    },
  };
  </script>
  ```

### Props

  | Property | Type | Default value | Description |
  | -------- | ---- | ------------- | ----------- |
  | `label` | `String` | undefined | add label to input |
  | `unit` | `String` | 'kg' | unit of weight |
  | `placeholder` | `String` | undefined | add placeholder to input |
  | `outlined` | `Boolean` | false | apply vuetify `outlined` style |
  | `dense` | `Boolean` | false | add vuetify `dense` prop to input |
  | `suffix` | `Boolean` | false | add suffix to input contain unit |
  | `disabled` | `Boolean` | false | add vuetify `disabled` prop to input |
  | `show-shortcuts` | `Boolean` | true | add additional buttons to menu to quck add weight (1/2, 1/4 ... etc) |
  | `width` | `Number` | false | width of input (not menu) |
  | `max-width` | `Number` | false | width of input (not menu) |
  | `empty-error` | `Boolean` | false | Puts the input in an error state if input is empty or equals to 0
  | `save-text` | `String` | 'Save' | save button text |
  | `cancel-text` | `String` | 'Cancel' | cancel button text |
  | `eighth-text` | `String` | '1/8' | 1/8 button text |
  | `quarter-text` | `String` | '1/4' | 1/4 button text |
  | `half-text` | `String` | '1/2' | 1/2 button text |
  | `plus-quarter-color` | `String` | 'secondary' | color of +0.25 button |
## Credits

made with &#x2764; by [Ebrahim Maher](https://github.com/ebrahimMaher).
