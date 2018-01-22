import Axios from 'axios';

export default ({
    async findBusStopsByHallNumber(hallNumber) {
      const x = await Axios.get(`http://localhost:3001/bus/${hallNumber}`);
      console.log(await x);
      return await x.data;
    }
});