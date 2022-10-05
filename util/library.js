export const sum = function (key, props) {
    if (props.isGlobal == false)
        switch (key) {
            case 'Confirmed':
                return props.data.jumlah_positif;
            case 'Recovered':
                return props.data.jumlah_sembuh;
            case 'Deaths':
                return props.data.jumlah_meninggal;
            case 'Active':
                return props.data.jumlah_dirawat;
            default:
                return 0;
        }
    // else {
    //     switch (key) {
    //         case 'Confirmed':
    //             return props.data.reduce((sum, a) => {
    //                 return sum + a.TotalConfirmed
    //             }, 0);
    //         case 'Recovered':
    //             return props.data.reduce((sum, a) => {
    //                 return sum + a.TotalRecovered
    //             }, 0);
    //         case 'Deaths':
    //             return props.data.reduce((sum, a) => {
    //                 return sum + a.TotalDeaths
    //             }, 0);
    //         case 'Active':
    //             return props.data.reduce((sum, a) => {
    //                 return sum + a.TotalRecovered
    //             }, 0);
    //         default:
    //             return 0;
    //     }
    // }

    else {
        switch (key) {
            case 'Confirmed':
                return props.data.cases;
            case 'Recovered':
                return props.data.recovered;
            case 'Deaths':
                return props.data.deaths;
            case 'Active':
                return props.data.active;
            default:
                return 0;
        }
    }
}

export const getAllMonth = function(props) {
    const monthEng = ['Jan', 'Feb', 'Mar', "Apr" , "Jun", "Jul" , "Aug", "Sep", "Nov", "Des"];
    let nowDate = new Date();
    let day = null;
    let month = null;
    let years = null;
    let label = [];
    let positif = [];
    let sembuh = [];
    let meninggal = [];
    let active = [];
    let data = [];

    for (let value of props.statistik) {
        nowDate = new Date(value.date)
        day = nowDate.getDate();
        month = nowDate.getMonth();
        years = nowDate.getFullYear();  
        label.push(day + " " + monthEng [<Math.abs(month)]);   
    }

}