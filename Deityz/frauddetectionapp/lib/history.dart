

import 'package:fl_chart/fl_chart.dart';
import 'package:flutter/material.dart';

class HistoryPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Transaction History'),
      ),
      body: SingleChildScrollView(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            _buildHeader('Transaction Report for Last Week'),
            SizedBox(height: 16.0), // Add spacing here
            _buildTransactionRow([
              _buildTransactionTile('Transaction 1', '\$100.00', '2023-08-10'),
              _buildTransactionTile('Transaction 2', '\$50.00', '2023-08-09'),
            ]),
            _buildTransactionRow([
              _buildTransactionTile('Transaction 3', '\$75.00', '2023-08-08'),
              _buildTransactionTile('Transaction 4', '\$30.00', '2023-08-07'),
            ]),
            Container(
              padding: EdgeInsets.all(16.0),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  Text(
                    'Transaction Report for Last Week',
                    style: TextStyle(
                      fontSize: 20.0,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                  SizedBox(height: 16.0),
                  AspectRatio(
                    aspectRatio: 1,
                    child: PieChart(
                      PieChartData(
                        sections: [
                          PieChartSectionData(
                            color: Colors.green,
                            value: 70, // Replace with the actual percentage of non-malicious transactions
                            title: 'Non-Malicious',
                            radius: 50,
                          ),
                          PieChartSectionData(
                            color: Colors.red,
                            value: 30, // Replace with the actual percentage of malicious transactions
                            title: 'Malicious',
                            radius: 50,
                          ),
                        ],
                        borderData: FlBorderData(show: false),
                        centerSpaceRadius: 40,
                        sectionsSpace: 0,
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildHeader(String headerText) {
    return Container(
      padding: EdgeInsets.all(16.0),
      child: Text(
        headerText,
        style: TextStyle(
          fontSize: 20.0,
          fontWeight: FontWeight.bold,
        ),
      ),
    );
  }

  Widget _buildTransactionTile(String title, String amount, String date) {
    return Container(
      width: 160.0,
      padding: EdgeInsets.all(16.0),
      decoration: BoxDecoration(
        border: Border.all(color: Colors.grey),
        borderRadius: BorderRadius.circular(8.0),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            title,
            style: TextStyle(fontSize: 18.0, fontWeight: FontWeight.bold),
          ),
          SizedBox(height: 8.0),
          Text('Amount: $amount'),
          SizedBox(height: 8.0),
          Text('Date: $date'),
        ],
      ),
    );
  }

  Widget _buildTransactionRow(List<Widget> children) {
    return Container(
      padding: EdgeInsets.symmetric(horizontal: 16.0),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        children: children,
      ),
    );
  }
}

