import React, { Component } from "react";
import axios from "axios";


export default class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      key:0,
      ten_path:[],
      dir_path:[],
      no_of_files: [],
      max_size: [],
      avg_size: [],
      list_of_ext: [[]],
      max_use_ext: [],
      no_max_ext: []
    };
  }

  componentDidMount() {
    axios.get("http://localhost:4000/stats").then(res => {
      console.log(res)
        this.setState({
          key:res.data.map(list=>list.length),
          ten_path: res.data.map(list=>list.ten_path),
          dir_path: res.data.map(list=>list.dir_path),
          no_of_files: res.data.map(list => list.nooffiles),
          max_size: res.data.map(list => list.max_fsize),
          avg_size: res.data.map(list => list.avg_fsize),
          list_of_ext: res.data.map(list => list.list_of_ext),
          max_use_ext: res.data.map(list => list.max_use_ext),
          no_max_ext: res.data.map(list => list.max_use_no)
        },()=>console.log(this.state));
    });
  }
    stripTitle =(content) => {
    let str1 = content;  
    let str2 = str1.slice(0,1);
    return str2;
}

  render() {
    return (
      <div style={{ padding: "32px",border:'2px black' }}>

        <div style={{padding:'0px'}}>
            <p>
               List of latest 10 file paths received
               <br/>
               {this.state.ten_path.map(path=> 
                 <p>
                   {path}
                   <br/>
                 </p>
               )}
            </p>
        </div>


        <table className="table">
          <thead className="thead-light">
            <tr style={{borderBottomColor:'#dddddd' }} >
              <th>statistics</th>
              <th>values </th>
            </tr>
          </thead>
          <tbody>
          <tr style={{ marginLeft: "32px" }}>
              <td>Directory path</td>
              <td>{this.state.dir_path +" "}</td><br/>
            </tr>
            <tr style={{ marginLeft: "32px" }}>
              <td>Number of files</td>
              <td>{  " "+ this.state.no_of_files  +"   " }</td>
            </tr>
            <tr>
              <td>Maximum file size</td>
              <td>{this.state.max_size  +" " }</td>
            </tr>
            <tr>
              <td>Average file size</td>
              <td>{this.state.avg_size  +" " }</td>
            </tr>
            <tr>
              <td>Most frequent file extension</td>
              <td>{this.state.max_use_ext  +" " }</td>
            </tr>
            <tr>
              <td>Most frequent file extension</td>
              <td>{this.state.no_max_ext  +" " }</td>
            </tr>
            <tr>
              <td>List of file extensions</td>
                <td >{this.state.list_of_ext  +" next file " }</td>  
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
