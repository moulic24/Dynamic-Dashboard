import React from 'react'
import { ResponsivePie } from '@nivo/pie'
import './Analytics.css';
const data = 
    [
        {
          "id": "c",
          "label": "c",
          "value": 511,
          "color": "hsl(289, 70%, 50%)"
        },
        {
          "id": "python",
          "label": "python",
          "value": 367,
          "color": "hsl(316, 70%, 50%)"
        },
        {
          "id": "ruby",
          "label": "ruby",
          "value": 116,
          "color": "hsl(221, 70%, 50%)"
        },
        {
          "id": "elixir",
          "label": "elixir",
          "value": 200,
          "color": "hsl(187, 70%, 50%)"
        },
        {
          "id": "sass",
          "label": "sass",
          "value": 325,
          "color": "hsl(100, 70%, 50%)"
        }
      ]

export default function Analytics({closeMenu,mode}) {
  return (
    <div className="ana" style={{backgroundColor:mode?'#acd2c3':'#141b2d', height:"700px",width:'100%vw',display:'grid',alignItems:'center',justifyContent:'center',marginLeft: closeMenu === false ? "262px" : "70px",transition:'0.5s'}}>
      <div className="header" >
           <h1 className="dname" style={{color: mode ?'#5c8d89' : '#74b49b' }}>Operating Expenses Development - </h1>
           </div>
      <div className="bar-graph" style={{height:"500px",width:"700px",backgroundColor:'white',display:'flex',paddingRight:'',alignItems:'center',justifyContent:'center'}}>
      <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.2
                ]
            ]
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    2
                ]
            ]
        }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'ruby'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'c'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'go'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'python'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'scala'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'lisp'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'elixir'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'javascript'
                },
                id: 'lines'
            }
        ]}
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                justify: false,
                translateX: 0,
                translateY: 56,
                itemsSpacing: 0,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: '#999',
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                symbolSize: 18,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    />
    </div>
    </div>
  )
}
