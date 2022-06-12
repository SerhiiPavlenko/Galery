// import React from "react";
// import { connect } from "react-redux";
// import TimerActions from '../redux/TimerActions'

// const  Timer = ({value,onIncrement,onDecrement}) =>  (
//             <div>
//                 <button type="button" onClick={() => onDecrement(5)}>-</button>
//                 <span>{value} minutes</span>
//                 <button type="button" onClick={() => onIncrement(10)}>+</button>
//             </div>
// )

// const mapStateToProps = state => {
//     return {
//        value: state.timer.value,
//     }
// }



// const mapDispatchToProps = {
//     onIncrement: TimerActions.increment,
//     onDecrement: TimerActions.decrement,
// }

// export default connect(mapStateToProps,mapDispatchToProps)(Timer);