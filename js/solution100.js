function totalpressure(molarMass1, molarMass2, givenMass1, givenMass2, volume, temp){
    let kelvin = temp + 273.15
    let answer = ((molarMass1/givenMass1) + (molarMass2/givenMass2) * temp) / volume
    return answer
}


// Given the molecular mass of two molecules M1M_1M 
// 1
// ​
//   and M2M_2M 
// 2
// ​
//  , their masses present m1m_1m 
// 1
// ​
//   and m2m_2m 
// 2
// ​
//   in a vessel of volume VVV at a specific temperature TTT, find the total pressure PtotalP_{total}P 
// total
// ​
//   exerted by the molecules. Formula to calculate the pressure is:

// Ptotal=(m1M1+m2M2)RTV\LARGE P_{total} = {{({{m_1} \over {M_1}} + {{m_2} \over {M_2}}) R T} \over V}P 
// total
// ​
//  = 
// V
// ( 
// M 
// 1
// ​
 
// m 
// 1
// ​
 
// ​
//  + 
// M 
// 2
// ​
 
// m 
// 2
// ​
 
// ​
//  )RT
// ​
 
// Input
// Six values :

// M1M_1M 
// 1
// ​
//  , M2M_2M 
// 2
// ​
//  : molar masses of both gases, in grams (ggg)
// m1m_1m 
// 1
// ​
//   and m2m_2m 
// 2
// ​
//  : present mass of both gases, in  g⋅mol−1\ g \cdot mol^{-1} g⋅mol 
// −1
 
// VVV: volume of the vessel, in  dm3\ dm^3 dm 
// 3
 
// TTT: temperature, in  °C\ \degree C °C
// Output
// One value: PtotalP_{total}P 
// total
// ​
//  , in units of atmatmatm.

// Notes