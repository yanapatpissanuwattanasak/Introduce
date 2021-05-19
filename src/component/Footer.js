import {Image} from 'react-bootstrap' 
function Footer() {
return(
    <div id='footer' >
    <div className="row " style={{height:400,background:'black',color:'white',}}>
       
            <div className="col-2">

            </div>
            <div className="col-4 text-left" style={{marginTop:50}}  >
              
                <h5>Social Media</h5>
                <br/>
                <a href="https://www.facebook.com/yugi.kung.3" target="_blank"><p>Facebook</p></a><br/>
                <a href="https://www.instagram.com/o_bright_o/" target="_blank"><p>Instagram</p></a><br/>
                <Image src="https://storage.cloud.google.com/node-bright/S__34996228.jpg" rounded style={{width:100}} />
            </div>
            <div className="col-2">

</div>
            <div className="col-3 text-left" style={{marginTop:50}} >
       
                <h5>Contact</h5>
                <br/>
                <p>Phone : 086 846 4543</p><br/>
                <p>Email : ynp.bright@gmail.com</p><br/>
                <p>Address : 38/20 หมู่ 3 ต.บางแก้ว อ.เมื่อง จ.ฉะเชิงเทรา</p><br/>
                <p>24000</p>

            </div>
            <div className="col-1">

            </div>
    </div>
    </div>
)
}
export default Footer