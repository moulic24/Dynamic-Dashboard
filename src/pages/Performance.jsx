import React from 'react'
import { ResponsiveBar } from '@nivo/bar'

const data = [
    {
      "country": "AD",
      "hot dog": 99,
      "hot dogColor": "hsl(6, 70%, 50%)",
      "burger": 171,
      "burgerColor": "hsl(203, 70%, 50%)",
      "sandwich": 160,
      "sandwichColor": "hsl(212, 70%, 50%)",
      "kebab": 176,
      "kebabColor": "hsl(234, 70%, 50%)",
      "fries": 148,
      "friesColor": "hsl(238, 70%, 50%)",
      "donut": 22,
      "donutColor": "hsl(337, 70%, 50%)"
    },
    {
      "country": "AE",
      "hot dog": 106,
      "hot dogColor": "hsl(9, 70%, 50%)",
      "burger": 183,
      "burgerColor": "hsl(107, 70%, 50%)",
      "sandwich": 152,
      "sandwichColor": "hsl(90, 70%, 50%)",
      "kebab": 82,
      "kebabColor": "hsl(39, 70%, 50%)",
      "fries": 190,
      "friesColor": "hsl(133, 70%, 50%)",
      "donut": 114,
      "donutColor": "hsl(4, 70%, 50%)"
    },
    {
      "country": "AF",
      "hot dog": 189,
      "hot dogColor": "hsl(309, 70%, 50%)",
      "burger": 173,
      "burgerColor": "hsl(333, 70%, 50%)",
      "sandwich": 124,
      "sandwichColor": "hsl(314, 70%, 50%)",
      "kebab": 63,
      "kebabColor": "hsl(45, 70%, 50%)",
      "fries": 37,
      "friesColor": "hsl(88, 70%, 50%)",
      "donut": 41,
      "donutColor": "hsl(276, 70%, 50%)"
    },
    {
      "country": "AG",
      "hot dog": 138,
      "hot dogColor": "hsl(228, 70%, 50%)",
      "burger": 60,
      "burgerColor": "hsl(110, 70%, 50%)",
      "sandwich": 77,
      "sandwichColor": "hsl(315, 70%, 50%)",
      "kebab": 200,
      "kebabColor": "hsl(303, 70%, 50%)",
      "fries": 115,
      "friesColor": "hsl(231, 70%, 50%)",
      "donut": 190,
      "donutColor": "hsl(57, 70%, 50%)"
    },
    {
      "country": "AI",
      "hot dog": 3,
      "hot dogColor": "hsl(170, 70%, 50%)",
      "burger": 37,
      "burgerColor": "hsl(139, 70%, 50%)",
      "sandwich": 184,
      "sandwichColor": "hsl(154, 70%, 50%)",
      "kebab": 14,
      "kebabColor": "hsl(246, 70%, 50%)",
      "fries": 193,
      "friesColor": "hsl(200, 70%, 50%)",
      "donut": 101,
      "donutColor": "hsl(98, 70%, 50%)"
    },
    {
      "country": "AL",
      "hot dog": 58,
      "hot dogColor": "hsl(236, 70%, 50%)",
      "burger": 187,
      "burgerColor": "hsl(100, 70%, 50%)",
      "sandwich": 116,
      "sandwichColor": "hsl(299, 70%, 50%)",
      "kebab": 112,
      "kebabColor": "hsl(320, 70%, 50%)",
      "fries": 99,
      "friesColor": "hsl(42, 70%, 50%)",
      "donut": 73,
      "donutColor": "hsl(186, 70%, 50%)"
    },
    {
      "country": "AM",
      "hot dog": 131,
      "hot dogColor": "hsl(97, 70%, 50%)",
      "burger": 79,
      "burgerColor": "hsl(74, 70%, 50%)",
      "sandwich": 19,
      "sandwichColor": "hsl(276, 70%, 50%)",
      "kebab": 44,
      "kebabColor": "hsl(215, 70%, 50%)",
      "fries": 175,
      "friesColor": "hsl(150, 70%, 50%)",
      "donut": 87,
      "donutColor": "hsl(21, 70%, 50%)"
    }
  ]
export default function Performance({closeMenu,mode}) {
  return (
    <div style={{backgroundColor:mode?'#acd2c3':'#141b2d', height:"700px",width:'100%vw',display:'grid',alignItems:'center',justifyContent:'center',marginLeft: closeMenu === false ? "262px" : "70px",transition:'0.5s'}}>
     <div className="header">
           <h1 className="dname" style={{color: mode ?'#5c8d89' : '#74b49b' }}>Average Sales Cycle Length - </h1>
           </div>
      <div className="bar-graph" style={{height:"500px",width:"700px",backgroundColor:'white',display:'flex',paddingRight:'',alignItems:'center',justifyContent:'center'}}>
       <ResponsiveBar
        data={data}
        keys={[
            'hot dog',
            'burger',
            'sandwich',
            'kebab',
            'fries',
            'donut'
        ]}
        indexBy="country"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'nivo' }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'fries'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'sandwich'
                },
                id: 'lines'
            }
        ]}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'country',
            legendPosition: 'middle',
            legendOffset: 32,
            truncateTickAt: 0
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'food',
            legendPosition: 'middle',
            legendOffset: -40,
            truncateTickAt: 0
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        legends={[
            {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={e=>e.id+": "+e.formattedValue+" in country: "+e.indexValue}
    />
    </div>
    </div>
  )
}
