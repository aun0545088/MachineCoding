import NestedFile from './components/NestedFile/NestedFile'
import ProgressBar from './components/ProgressBar/ProgressBar'

const App = () => {
  // const bars = [0, 5, 10, 30, 50, 70, 100]
  return (
    <>
      {/* <div>
        <h1>Progress Bar</h1>
        {bars.map((el, index) => (<ProgressBar progress={el} key={index} />))}
      </div> */}
      <NestedFile />
    </>
  )
}

export default App
