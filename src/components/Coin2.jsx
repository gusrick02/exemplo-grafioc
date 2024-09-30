import { Chart } from 'react-google-charts';

const Coin2 = () => {
  return (
    <div style={{ margin: 'auto', width: '100%', textAlign: 'center' }}>
      <Chart
        chartType="LineChart"
        width="100%"
        height="900px"
        data={[
          ['Year', 'Sales', 'Expenses','Expenses'],
          ['Mon', 1000, 400, 500],
          ['Tue', 1170, 460, 900],
          ['Wed', 660, 1120, 1300],
          ['Thu', 1030, 540, 200],
          ['Thu', 1030, 540, 900],
          ['Thu', 1030, 540, 503],
        ]}
        options={{
          title: 'Quest Evolution',
          curveType: 'function',
        }}
      />
    </div>
  );
};

export default Coin2;
