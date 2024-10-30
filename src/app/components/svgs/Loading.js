const Loading = (props) => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className="w-14 h-5">
        <circle fill={props.color} stroke={props.color} strokeWidth="15" r="45" cx="35" cy="65">
          <animate
            attributeName="cy"
            calcMode="spline"
            dur="1s"
            values="65;130;65"
            keySplines=".5 0 .5 1;.5 0 .5 1"
            repeatCount="indefinite"
            begin="-.4s"
          />
        </circle>
        <circle fill={props.color} stroke={props.color} strokeWidth="15" r="45" cx="180" cy="65">
          <animate
            attributeName="cy"
            calcMode="spline"
            dur="1s"
            values="65;130;65"
            keySplines=".5 0 .5 1;.5 0 .5 1"
            repeatCount="indefinite"
            begin="-.2s"
          />
        </circle>
        <circle fill={props.color} stroke={props.color} strokeWidth="15" r="45" cx="320" cy="65">
          <animate
            attributeName="cy"
            calcMode="spline"
            dur="1s"
            values="65;130;65"
            keySplines=".5 0 .5 1;.5 0 .5 1"
            repeatCount="indefinite"
            begin="0s"
          />
        </circle>
      </svg>
    );
  };
  
  export default Loading;
  