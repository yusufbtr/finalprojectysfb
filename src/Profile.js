import React from 'react';
import './App.css';

class Profile extends React.Component{
    constructor(props){
      super(props);
      this.state={
        name: '',
        gaji: 0,
        masuk: '',
        gender: '',
        skill: [],
        alamat: ''
        
      }
  
      this.onChange = this.onChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
      this.onPick = this.onPick.bind(this);
      this.onChangeradio = this.onChangeradio.bind(this);
  
    }
  
    onSubmit(event){
      event.preventDefault();
      event.stopPropagation();
      const {name, gaji, masuk, skill, alamat} = this.state;
      alert(`Namaku adalah ${name}, gajiku sebesar Rp${gaji},
      aku masuk kerja tanggal ${masuk}, kemampuanku ${skill},
      jenis kelaminku ${this.state.gender},alamatku di ${alamat}`);
    }
  
    onChangeradio(event) {
      this.setState({
        gender: event.target.value
      });
    }
    
  
    onChange (event){
      const {name, value } = event.target;
      this.setState({[name]: value})
    }
  
    onPick(event){
      let skill = [...this.state.skill];
      let skl = skill.findIndex(elemen => event.target.value === elemen);
      if(skl > 0){
        skill = [...skill.slice(0, skl), ...skill.slice(skl + 1, skill.length)]
      } else if ( skl === 0) {
        skill = [...skill.slice(skl + 1, skill.length)]
      } else{
        skill.push(event.target.value)
      }
  
      console.log(skill);
  
      this.setState({skill});
    }

    render(){
        const {name, gaji, masuk, skill, alamat} = this.state;
    
        return (
        <React.Fragment>
            <div className="app">
                <div className="form-wrapper">
                    <h2>Profile Page</h2>
                    <p>Please fill in the form below:</p>
                        <div>
                            <form onSubmit={this.onSubmit} className="form-input-wrapper">
                                <label>
                                Name:
                                <br/><input name="name" type="text" value={name} onChange={this.onChange} className="form-input"/>
                                </label><br/>
                                <label>
                                Gaji: Rp<br/>
                                <input name="gaji" type="number" value={gaji} onChange={this.onChange} className="form-input"/>
                                </label><br/>
                                <label>
                                Tanggal Masuk Kerja:<br/>
                                <input name="masuk" type="date" value={masuk} onChange={this.onChange} className="form-input"/>
                                </label><br/>
                                <label>Jenis Kelamin:</label><br/>
                                <label>
                                    <input
                                    type="radio"
                                    value="laki-laki"
                                    checked={this.state.gender === "laki-laki"}
                                    onChange={this.onChangeradio}
                                    />
                                    Laki - Laki
                                </label>
                                <label>
                                    <input
                                    type="radio"
                                    value="perempuan"
                                    checked={this.state.gender === "perempuan"}
                                    onChange={this.onChangeradio}
                                    />
                                    Perempuan
                                </label><br/>
                                <label>
                                Skill:<br/>
                                <select multiple value={skill} onChange={this.onPick}>
                                    <option value="programming">Programming</option>
                                    <option value="analisis">Analythic Thinking</option>
                                    <option value="design">Design</option>
                                </select>
                                </label><br/>
                                <label>
                                Alamat:<br/>
                                <textarea name="alamat" value={alamat} onChange={this.onChange} className="form-input"/>
                                </label><br/>
                                <div className="btn-wrapper">
                                    <button type="submit" className="btn-submit">
                                    Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                </div>
            </div>
            

        </React.Fragment>

          
        );
      }
    }

export default Profile;