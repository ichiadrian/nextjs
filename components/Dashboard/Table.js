
const Table = (props) => {
    return (
        <div className="row mb-5">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title text-center">
                            {props.isGlobal ? "Data Virus Covid 19 Di Dunia" : "Data Virus Covid 19 DI INDONESIA"}
                        </h3>
                    </div>
                    <div className="card-body">
                        {/* <div className="table table-responsive">
                            <div className="table table-bordered table-hover mb-0 text-nowrap">
                                <thead>
                                    <tr>
                                        <th>No.</th>
                                        <th>{props.isGlobal ? "Negara" : "Provinsi"}</th>
                                        <th>Positif</th>
                                        <th>Sembuh</th>
                                        <th>Meninggal</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {props.isGlobal ?
                                        <tr>
                                            <td>1.</td>
                                            <td>United State</td>
                                            <td>3.000.000</td>
                                            <td>1.000.000</td>
                                            <td>250.000</td>
                                        </tr>
                                        :
                                        <tr>
                                            <td>1.</td>
                                            <td>Jawa Timur</td>
                                            <td>3.000.000</td>
                                            <td>1.000.000</td>
                                            <td>400</td>
                                        </tr>

                                    }


                                </tbody>
                            </div>
                        </div> */}

                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>No.</th>
                                    <th>{props.isGlobal ? "Negara" : "Provinsi"}</th>
                                    <th>Positif</th>
                                    <th>Sembuh</th>
                                    <th>Meninggal</th>
                                </tr>
                            </thead>
                            <tbody>
                                {props.isGlobal ?
                                    <tr>
                                        <th>1.</th>
                                        <td>United State</td>
                                        <td>3.000.000</td>
                                        <td>1.000.000</td>
                                        <td>250.000</td>
                                    </tr>
                                    :
                                    <tr>
                                        <th>1.</th>
                                        <td>Jawa Timur</td>
                                        <td>3.000.000</td>
                                        <td>1.000.000</td>
                                        <td>400</td>
                                    </tr>

                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Table;
