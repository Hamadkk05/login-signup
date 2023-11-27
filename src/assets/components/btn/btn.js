import './btn.css'

        
const Btn = ({title= "yes", press}) => {
    return (
        <div className='center'>
            <button className='btn' onClick={()=>{
            press()
        }}>
            {title}
</button>
        </div>
    
    );
};
export default Btn;