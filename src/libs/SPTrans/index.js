import Axios from 'axios';

export default ({
  async findBusStopsByHallNumber(hallNumber) {
    try {
      const x = await Axios.get(`https://api-mitonio-react.herokuapp.com/bus/${hallNumber}`);
      return x.data;
    } catch (err) {
      console.log(err);
    }
  }
});
