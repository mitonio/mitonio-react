import Axios from 'axios';

export default ({
    async findBusStopsByHallNumber(hallNumber) {
      const x = await Axios.get(`https://api-mitonio-react.herokuapp.com/bus/${hallNumber}`);
      return await x.data;
    }
});