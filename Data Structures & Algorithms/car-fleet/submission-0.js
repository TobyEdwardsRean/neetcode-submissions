class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let cars = []
        let stack = []

        for (let car = 0; car < position.length; car ++) {
            cars.push([position[car], speed[car]])
        }

        let sortedCars = cars.sort((a, b) => b[0] - a[0])

        for (let car = 0; car < sortedCars.length; car ++) {
            let currentCar = sortedCars[car]
            let time = (target - currentCar[0]) / currentCar[1]
            if (stack.length === 0) {
                stack.push(time)
            }
            else if (time > stack[stack.length - 1]) {
                stack.push(time)
            }
        }
        return stack.length
    }
}
