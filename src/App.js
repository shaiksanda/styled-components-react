import {Heading, CustomButton} from './styledComponents'
import './App.css'

const App = () => (
  <div>
    <Heading>Hello World</Heading>
    <CustomButton type="button">Click</CustomButton>
    <CustomButton outline type="button">
      Click
    </CustomButton>
  </div>
)

export default App
