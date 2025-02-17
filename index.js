
var data = [
    {
        year: 2010,
        revenue: [
            {
                month: "Q1",
                revenue: 21500
            },
            {
                month: "Q2",
                revenue: 27300
            },            {
                month: "Q3",
                revenue: 24800
            },            {
                month: "Q4",
                revenue: 28900
            },
        ]
    },
    {
        year: 2011,
        revenue: [
            {
                month: "Q1",
                revenue: 26400
            },
            {
                month: "Q2",
                revenue: 30300
            },            {
                month: "Q3",
                revenue: 26200
            },            {
                month: "Q4",
                revenue: 29100
            },
        ]
    },   
    {
        year: 2012,
        revenue: [
            {
                month: "Q1",
                revenue: 31200
            },
            {
                month: "Q2",
                revenue: 29400
            },            {
                month: "Q3",
                revenue: 34600
            },            {
                month: "Q4",
                revenue: 37200
            },
        ]
    }
]
var totalRevenue = 0;


function main() {
    

     for(let i = 0; i < data.length; i++){
        let yearindata = data[i]
            console.log("year: " + yearindata.year );  
            for(let j = 0; j < yearindata.revenue.length; j++){
                let newrevenue = yearindata.revenue[j]
                console.log("die aktuelle quatal zahl: " + newrevenue.month);

                totalRevenue += newrevenue.revenue
                console.log(" ausgabe im quatalmonat: " + newrevenue.revenue)
                
                }
            }
            console.log("gesamt ausgabe " + totalRevenue)
            
     }
   
    

          
           
    
        
        // ↑
    
    
    // Sample Data
