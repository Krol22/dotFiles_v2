export const command = './testbar/scripts/workspace.sh';
export const refreshFrequency = 300;

const style = {
  background: 'black',
  color: 'white',
  padding: '5px 10px',
  borderRadius: '5px',
  height: '20px',
  position: 'fixed',
  overflow: 'hidden',
  top: '0px',
  left: '300px',
};

export const render = ({ output }) => {
  const spaces = JSON.parse(output);

  const activeSpace = spaces.find(space => space.visible);
  console.log(activeSpace);
  return <div style={style}>{activeSpace.index}</div>
};
