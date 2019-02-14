declare var manywho: any;

import * as React from 'react';

class PercentProgressBar extends React.Component<any, any> 
{   
    constructor(props : any)
	{
        super(props);
    }

    componentDidMount() 
    {
        this.forceUpdate();
    }

	render()
	{
        var className : any = "glyphicon glyphicon-";
        var tooltip : string = "";

        var value = parseInt(this.props.contentValue) || 0;
        var displayValue = value + "%";

        var tooltip : string = value + "%";
        
        var outerStyle : React.CSSProperties = {
                border : "2px solid #adadad",
                borderRadius:"5px",
                backgroundColor:"#e3e3e3",
                height:"30px",
                boxSizing: "content-box",
                position : "relative" as "relative",
                display: "grid",
                alignContent: 'middle',
                margin: '0 !important'
            };

        var barStyle : React.CSSProperties = {
            border: "none",
            borderRadius:"4px",
            backgroundColor:"#7D9ACF",
            width: displayValue,
            textAlign : "center" ,
            height: "100%",
            };

        var captionStyle : React.CSSProperties = {
            fontFamily : "tahoma",
            color : "#ffffff",
            fontSize : "10pt",
            width : "100%",
            textAlign : "center",
            position : "absolute" as "absolute",
            height: "100%",
            verticalAlign: "middle",
            lineHeight: "200%",
            mixBlendMode: "difference",
            left: 0
            };

        var max = 100;
        var min = 0;
        var pos = 60;

        return  <div style={outerStyle}>
                    <div role="progressbar" aria-valuenow={pos} aria-valuemin={min} aria-valuemax={max} style={barStyle}>
                        <span style={captionStyle}>{displayValue}</span>
                    </div>     
                </div> 

    }
}

//<Tooltip border="#ffffff" radius="5" placement="right" content={tooltip}></Tooltip>

manywho.component.register('PercentProgressBar', PercentProgressBar);

export default PercentProgressBar;