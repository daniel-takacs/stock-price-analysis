LIVE: https://daniel-takacs.github.io/stock-price-analysis/

I built with React.
Firstly converted the csv file to JSON data file. Used npm convert-csv-to-json package, Saved the data to data.js file.
Used UseEffect hooks to Fetch and read data from data.js.
I used JavaScript map, filter, push, indexOf, find methods, for loops, algorithms, functions.


Assignment - questions:

A) How many days was the longest bullish (upward) trend within a given date range?

Definition of an upward trend shall be: “Closing price of day N is higher than closing price of day N-1”
Read start date and end date of the date range from user input (or pass them as input parameters via the API if your MVP does not have an user interface). 
Both start and end date shall be included to the date range.
Expected output: The max amount of days the stock price was increasing in a row

Example: In Apple stock historical data the Close/Last price increased 3 days in a row between 01/06/2021 and 01/08/2021. 

B) Which dates within a given date range had a) the highest trading volume and b) the most significant stock price change within a day?

Use High and Low prices to calculate the stock price change within a day. (Stock price change from 2$ to 1$ is equally significant as change from 1$ to 2$.)
Expected output: List of dates, volumes and price changes. The list is ordered by volume and price change. So if two dates have the same volume, the one with the more significant price change should come first.

C) Within a given date range, which dates had the best opening price compared to 5 days simple moving average (SMA 5)?

Calculate simple moving average for day N using the average value of closing prices between days N-1 to N-5.
Calculate how many percentages (%) is the difference between the opening price of the day and the calculated SMA 5 price of the day.
Expected output: List of dates and price change percentages. The list is ordered by price change percentages.
