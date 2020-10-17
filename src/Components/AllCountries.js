import React , { useEffect,useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        maxWidth:1000,
        marginTop:50,
        margin:'0 auto'
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    title:{
        color:"#3f51b5",
        padding:10,
        fontSize:20,

    },
    table: {
        height: '600px',
        width:'1000px',
        overflowY: 'scroll',
        display: 'block'
    },
    head:{
        fontWeight:'bold',
        fontSize:20,
        color:'black',
        padding:10

    },
    fieldset:{
        boxShadow: '10px 20px 30px 30px #888888',


    }
  }),
);

export default function AllCountries() {
    const [globalData,setGlobalData ]=useState([{}]);

    useEffect(()=>{
        async function getData(){
            const responce=await fetch("https://api.thevirustracker.com/free-api?countryTotals=ALL");
            let data=await responce.json();
            // delete data.results[0].source;
            setGlobalData(Object.values(Object.values(data.countryitems)[0]));
            console.log(Object.values(Object.values(data.countryitems)[0]))

        }
        getData();
    },[])
 



  const classes = useStyles();

  return (
    <div className={classes.root}>
<fieldset  className={classes.fieldset}>
<table className={classes.table}>
                <thead>
                    <tr className={classes.title}>
                        <th className={classes.head}>Country Name</th>
                        <th className={classes.head}>Total Cases</th>
                        <th className={classes.head}>Active Cases</th>
                    </tr>
                </thead>
                <tbody>
                    {globalData.map((key, ind) => {
                        return (
                            <tr key={ind}>
                                <th className={classes.title}>
                                    {globalData[ind].title}
                                </th>
                                <td className={classes.head}>
                                    {globalData[ind].total_cases}
                                </td>
                                <td className={classes.head}>
                                    {globalData[ind].total_active_cases}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            </fieldset>
    </div>
  );
}
