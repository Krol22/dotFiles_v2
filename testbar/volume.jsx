export const command = './testbar/scripts/volume.sh';

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
  left: '500px',
}

export const render = ({output}) => {
  const [volumeLevel, muted] = output.split('\n');
  return <div style={style}> {volumeLevel}, {muted} </div>
}
