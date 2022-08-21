# Courier-Service
a command line application for courier service 
## Requirements
- node.js
## Getting Started
1. Install packages

    ```bash
      npm install
    ```

2. Start the application
   ```bash
      npm start
    ```
3. Test the application
   ```bash
      npm test
    ```

## Sample Input Formats
Input Format
```
base_delivery_cost no_of_packges

pkg_id1 pkg_weight1_in_kg distance1_in_km offer_code1
...

no_of_vehicles max_speed max_carriable_weight
```
sample(I)
```
100 5
PKG1 50 30 OFR001
PKG2 75 125 OFR008
PKG3 175 100 OFR003
PKG4 110 60 OFR002
PKG5 155 95 NA
2 70 200
```
## Sample Output Formats
Output Format
```
pkg_id1 discount1 total_cost1 estimated_delivery_time1_in_hours
...
```
sample(I)
```
PKG1 0 750 3.98
PKG2 0 1475 1.78
PKG3 0 2350 1.42
PKG4 105 1395 0.85
PKG5 0 2125 4.19
```