// import _ from 'lodash'
import ReactDOM from 'react-dom'
import React, {ReactNode, Fragment} from 'react'
import _ from 'lodash-es'

const q2 = _.random(true)

class App extends React.Component{


    render():ReactNode{
        return <Fragment>
            <div>
                <h2>React component :DDD</h2>
                <h3>{q2}</h3>
            </div>
        </Fragment>
    }
}


ReactDOM.render(<App />, document.getElementById('root') )

console.log(q2)