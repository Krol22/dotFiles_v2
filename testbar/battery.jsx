export const command = './testbar/scripts/battery.sh';

export const refreshFrequency = 10000;

const style = {
  background: 'black',
  color: 'white',
  padding: '5px 10px',
  borderRadius: '5px',
  height: '20px',
  position: 'fixed',
  overflow: 'hidden',
  top: '0px',
  left: '0px',
}

export const render = ({output}) => {
  return <div style={style}> {output} </div>
};
