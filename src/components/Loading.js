import { CircularProgress  } from "material-ui";
import React,{ Component } from 'react';

class Loading extends Component{
    render(){
        const style = {
            container: {
              position: 'fixed',
              width:'100%',
              height:'100%',
              left:0,
              top:0,
              zIndex:9999,
              background:'rgba(255,255,255,0.7)',
              display:this.props.isShow?'block':'none'
            },
            refresh: {
              display: 'inline-block',
              position: 'absolute',
              left:'calc(50% - 20px)',
              top:'calc(50% - 40px)'
            },
          };
          return (
            <div style={style.container}>
                <CircularProgress 
                size={40}
                thickness={3}
                style={style.refresh}
                />
            </div>
          )
    }
}

export default Loading;