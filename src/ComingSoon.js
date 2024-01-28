// components/ComingSoon.js

import React from 'react';
import { Helmet } from 'react-helmet';

const ComingSoon = () => {
  return (
    <>
             <Helmet>
        {/* Set the title dynamically */}
        <title>Coming Soon - LetsMakeItOnline</title>
        {/* Set the meta description */}
        <meta name="title" content="Comming Soon - LetsMakeItOnline" />
        <meta name="description" content="This Page is comming soon" />
      </Helmet>

      <div className="coming-soon-container mt-5 mb-5">
  <h2>This Page is Coming Soon!</h2>
  <p>We are currently working on bringing you exciting content to enhance your experience. Stay tuned for the launch!</p>
  <p>Follow us on social media for updates:</p>
  <div className="social-icons">
    {/* Add social media icons or links here */}
    {/* Example: <i className="fab fa-twitter"></i> */}
  </div>
</div>
    </>
  
  );
};

export default ComingSoon;


<pre>Array
(
    [0] => stdClass Object
        (
            [id] => 5088
            [serviceid] => 14879107917885914247
            [user_id] => 
            [action] => 
            [amount] => 1.00
            [rpid] => 9800265903
            [transaction_timestamp] => 2023-12-19 00:00:00
            [created_at] => 2023-12-19 09:46:31
            [bizid] => 
            [log_type] => User Submission
            [detail] => 
            [status] => Submitted
            [username] => chetanexpense1
            [expense_id] => 5951
            [issuer] => HardWorkin Inc
            [s3_file_path] => ["4471-9800265903\/14879107917885914247.jpg"]
            [receipt_status] => 2
            [notes] => 
            [requestedamount] => 1.00
            [description] => test
            [category] => Agricultral Services,Airlines
            [s3_file_path1] => 
            [s3_file_path2] => 4471-9800265903/14879107917885914247.jpg
        )

    [1] => stdClass Object
        (
            [id] => 5087
            [serviceid] => 67480202256562304974
            [user_id] => 
            [action] => 
            [amount] => 1.00
            [rpid] => 9800265903
            [transaction_timestamp] => 2023-12-19 00:00:00
            [created_at] => 2023-12-19 09:45:23
            [bizid] => 
            [log_type] => User Submission
            [detail] => 
            [status] => Submitted
            [username] => chetanexpense1
            [expense_id] => 5950
            [issuer] => HardWorkin Inc
            [s3_file_path] => ["2767-9800265903\/67480202256562304974.jpg"]
            [receipt_status] => 2
            [notes] => 
            [requestedamount] => 1.00
            [description] => 1
            [category] => Agricultral Services,Airlines
            [s3_file_path1] => undefined
            [s3_file_path2] => undefined
        )

    [2] => stdClass Object
        (
            [id] => 5076
            [serviceid] => 49797915170566331433
            [user_id] => 8478
            [action] => 
            [amount] => 2.10
            [rpid] => 9800265903
            [transaction_timestamp] => 0000-00-00 00:00:00
            [created_at] => 2023-12-19 07:52:44
            [bizid] => 7246
            [log_type] => Status Change
            [detail] => Reimbursed by admin
            [status] => Reimbursed
            [username] => ferris
            [expense_id] => 5937
            [issuer] => HardWorkin Inc
            [s3_file_path] => 
            [receipt_status] => 0
            [notes] => 
            [requestedamount] => 2.10
            [description] => test
            [category] => Bars Liquor Shop
            [s3_file_path1] => 
            [s3_file_path2] => 2985-9800265903/49797915170566331433.jpg
        )

    [3] => stdClass Object
        (
            [id] => 5075
            [serviceid] => 49797915170566331433
            [user_id] => 
            [action] => 
            [amount] => 2.10
            [rpid] => 9800265903
            [transaction_timestamp] => 2023-12-17 18:30:00
            [created_at] => 2023-12-19 07:48:24
            [bizid] => 
            [log_type] => User Submission
            [detail] => 
            [status] => Submitted
            [username] => chetanexpense1
            [expense_id] => 5937
            [issuer] => HardWorkin Inc
            [s3_file_path] => ["2985-9800265903\/49797915170566331433.jpg"]
            [receipt_status] => 0
            [notes] => 
            [requestedamount] => 2.10
            [description] => test
            [category] => Bars Liquor Shop
            [s3_file_path1] => 
            [s3_file_path2] => 2985-9800265903/49797915170566331433.jpg
        )

    [4] => stdClass Object
        (
            [id] => 5074
            [serviceid] => 57555217729364871460
            [user_id] => 8478
            [action] => 
            [amount] => 4.40
            [rpid] => 9800265903
            [transaction_timestamp] => 0000-00-00 00:00:00
            [created_at] => 2023-12-19 07:31:30
            [bizid] => 7246
            [log_type] => Status Change
            [detail] => Reimbursed by admin
            [status] => Reimbursed
            [username] => ferris
            [expense_id] => 5927
            [issuer] => HardWorkin Inc
            [s3_file_path] => 
            [receipt_status] => 1
            [notes] => testing on 19 dec 2023
            [requestedamount] => 4.40
            [description] => trip title
            [category] => Transportation - Air,Transportation - Auto Rental,Transportation - Fuel,Transportation - Mileage* @ $0.625 / mile,Transportation - Other,Transportation - Parking / Tolls
            [s3_file_path1] => 
            [s3_file_path2] => 2963-9800265903/57555217729364871460.jpg,2313-9800265903/57555217729364871460.jpg
        )

    [5] => stdClass Object
        (
            [id] => 5073
            [serviceid] => 80983790482834383528
            [user_id] => 8478
            [action] => 
            [amount] => 6.60
            [rpid] => 9800265903
            [transaction_timestamp] => 0000-00-00 00:00:00
            [created_at] => 2023-12-19 07:16:21
            [bizid] => 7246
            [log_type] => Status Change
            [detail] => Reimbursed by admin
            [status] => Reimbursed
            [username] => ferris
            [expense_id] => 5933
            [issuer] => HardWorkin Inc
            [s3_file_path] => 
            [receipt_status] => 2
            [notes] => 
            [requestedamount] => 6.60
            [description] => trip title
            [category] => Insurance,Jewelry,Laundry
            [s3_file_path1] => 
            [s3_file_path2] => 338-9800265903/80983790482834383528.jpg
        )

    [6] => stdClass Object
        (
            [id] => 5072
            [serviceid] => 80983790482834383528
            [user_id] => 8478
            [action] => 
            [amount] => 6.60
            [rpid] => 9800265903
            [transaction_timestamp] => 0000-00-00 00:00:00
            [created_at] => 2023-12-19 07:15:07
            [bizid] => 7246
            [log_type] => Status Change
            [detail] => Reimbursed by admin
            [status] => Reimbursed
            [username] => ferris
            [expense_id] => 5933
            [issuer] => HardWorkin Inc
            [s3_file_path] => 
            [receipt_status] => 2
            [notes] => 
            [requestedamount] => 6.60
            [description] => trip title
            [category] => Insurance,Jewelry,Laundry
            [s3_file_path1] => 
            [s3_file_path2] => 338-9800265903/80983790482834383528.jpg
        )

    [7] => stdClass Object
        (
            [id] => 5071
            [serviceid] => 80983790482834383528
            [user_id] => 8478
            [action] => 
            [amount] => 6.60
            [rpid] => 9800265903
            [transaction_timestamp] => 0000-00-00 00:00:00
            [created_at] => 2023-12-19 07:14:59
            [bizid] => 7246
            [log_type] => Status Change
            [detail] => Reimbursed by admin
            [status] => Reimbursed
            [username] => ferris
            [expense_id] => 5933
            [issuer] => HardWorkin Inc
            [s3_file_path] => 
            [receipt_status] => 2
            [notes] => 
            [requestedamount] => 6.60
            [description] => trip title
            [category] => Insurance,Jewelry,Laundry
            [s3_file_path1] => 
            [s3_file_path2] => 338-9800265903/80983790482834383528.jpg
        )

    [8] => stdClass Object
        (
            [id] => 5069
            [serviceid] => 80983790482834383528
            [user_id] => 8478
            [action] => 
            [amount] => 6.60
            [rpid] => 9800265903
            [transaction_timestamp] => 0000-00-00 00:00:00
            [created_at] => 2023-12-19 07:04:05
            [bizid] => 7246
            [log_type] => Status Change
            [detail] => Reimbursed by admin
            [status] => Reimbursed
            [username] => ferris
            [expense_id] => 5933
            [issuer] => HardWorkin Inc
            [s3_file_path] => 
            [receipt_status] => 2
            [notes] => 
            [requestedamount] => 6.60
            [description] => trip title
            [category] => Insurance,Jewelry,Laundry
            [s3_file_path1] => 
            [s3_file_path2] => 338-9800265903/80983790482834383528.jpg
        )

    [9] => stdClass Object
        (
            [id] => 5066
            [serviceid] => 80983790482834383528
            [user_id] => 
            [action] => 
            [amount] => 6.60
            [rpid] => 9800265903
            [transaction_timestamp] => 2020-06-25 18:30:00
            [created_at] => 2023-12-19 06:47:50
            [bizid] => 
            [log_type] => User Submission
            [detail] => 
            [status] => Submitted
            [username] => chetanexpense1
            [expense_id] => 5933
            [issuer] => HardWorkin Inc
            [s3_file_path] => ["338-9800265903\/80983790482834383528.jpg"]
            [receipt_status] => 2
            [notes] => 
            [requestedamount] => 6.60
            [description] => trip title
            [category] => Insurance,Jewelry,Laundry
            [s3_file_path1] => 
            [s3_file_path2] => 338-9800265903/80983790482834383528.jpg
        )

    [10] => stdClass Object
        (
            [id] => 5060
            [serviceid] => 57555217729364871460
            [user_id] => 
            [action] => 
            [amount] => 4.40
            [rpid] => 9800265903
            [transaction_timestamp] => 2023-12-18 18:30:00
            [created_at] => 2023-12-19 06:25:07
            [bizid] => 
            [log_type] => User Submission
            [detail] => 
            [status] => Submitted
            [username] => chetanexpense1
            [expense_id] => 5927
            [issuer] => HardWorkin Inc
            [s3_file_path] => ["2963-9800265903\/57555217729364871460.jpg","2313-9800265903\/57555217729364871460.jpg"]
            [receipt_status] => 1
            [notes] => testing on 19 dec 2023
            [requestedamount] => 4.40
            [description] => trip title
            [category] => Transportation - Air,Transportation - Auto Rental,Transportation - Fuel,Transportation - Mileage* @ $0.625 / mile,Transportation - Other,Transportation - Parking / Tolls
            [s3_file_path1] => 
            [s3_file_path2] => 2963-9800265903/57555217729364871460.jpg,2313-9800265903/57555217729364871460.jpg
        )

    [11] => stdClass Object
        (
            [id] => 4987
            [serviceid] => 34093462229712290235
            [user_id] => 8478
            [action] => 
            [amount] => 8.00
            [rpid] => 9800265903
            [transaction_timestamp] => 0000-00-00 00:00:00
            [created_at] => 2023-12-18 13:45:47
            [bizid] => 7246
            [log_type] => Status Change
            [detail] => Rejected by admin
            [status] => Rejected
            [username] => ferris
            [expense_id] => 5863
            [issuer] => HardWorkin Inc
            [s3_file_path] => 
            [receipt_status] => 0
            [notes] => test
            [requestedamount] => 8.00
            [description] => test
            [category] => Car Rental
            [s3_file_path1] => 
            [s3_file_path2] => 9801-9800265903/34093462229712290235.jpg
        )

    [12] => stdClass Object
        (
            [id] => 4986
            [serviceid] => 34093462229712290235
            [user_id] => 
            [action] => 
            [amount] => 8.00
            [rpid] => 9800265903
            [transaction_timestamp] => 2023-12-01 18:30:00
            [created_at] => 2023-12-18 01:43:31
            [bizid] => 
            [log_type] => User Submission
            [detail] => 
            [status] => Submitted
            [username] => chetanexpense1
            [expense_id] => 5863
            [issuer] => HardWorkin Inc
            [s3_file_path] => ["9801-9800265903\/34093462229712290235.jpg"]
            [receipt_status] => 0
            [notes] => test
            [requestedamount] => 8.00
            [description] => test
            [category] => Car Rental
            [s3_file_path1] => 
            [s3_file_path2] => 9801-9800265903/34093462229712290235.jpg
        )

    [13] => stdClass Object
        (
            [id] => 4985
            [serviceid] => 66367510921373373822
            [user_id] => 8478
            [action] => 
            [amount] => 5.60
            [rpid] => 9800265903
            [transaction_timestamp] => 0000-00-00 00:00:00
            [created_at] => 2023-12-18 13:37:20
            [bizid] => 7246
            [log_type] => Status Change
            [detail] => Approved by admin
            [status] => Approved
            [username] => ferris
            [expense_id] => 5861
            [issuer] => HardWorkin Inc
            [s3_file_path] => 
            [receipt_status] => 2
            [notes] => testing it
            [requestedamount] => 5.60
            [description] => test
            [category] => Charitable Donations,Clothing Stores
            [s3_file_path1] => 
            [s3_file_path2] => 2467-9800265903/66367510921373373822.jpg
        )

    [14] => stdClass Object
        (
            [id] => 4984
            [serviceid] => 66367510921373373822
            [user_id] => 8478
            [action] => 
            [amount] => 5.60
            [rpid] => 9800265903
            [transaction_timestamp] => 0000-00-00 00:00:00
            [created_at] => 2023-12-18 13:37:06
            [bizid] => 7246
            [log_type] => Status Change
            [detail] => Approved by admin
            [status] => Approved
            [username] => ferris
            [expense_id] => 5861
            [issuer] => HardWorkin Inc
            [s3_file_path] => 
            [receipt_status] => 2
            [notes] => testing it
            [requestedamount] => 5.60
            [description] => test
            [category] => Charitable Donations,Clothing Stores
            [s3_file_path1] => 
            [s3_file_path2] => 2467-9800265903/66367510921373373822.jpg
        )

    [15] => stdClass Object
        (
            [id] => 4983
            [serviceid] => 66367510921373373822
            [user_id] => 8478
            [action] => 
            [amount] => 5.60
            [rpid] => 9800265903
            [transaction_timestamp] => 0000-00-00 00:00:00
            [created_at] => 2023-12-18 13:36:44
            [bizid] => 7246
            [log_type] => Status Change
            [detail] => Approved by admin
            [status] => Approved
            [username] => ferris
            [expense_id] => 5861
            [issuer] => HardWorkin Inc
            [s3_file_path] => 
            [receipt_status] => 2
            [notes] => testing it
            [requestedamount] => 5.60
            [description] => test
            [category] => Charitable Donations,Clothing Stores
            [s3_file_path1] => 
            [s3_file_path2] => 2467-9800265903/66367510921373373822.jpg
        )

    [16] => stdClass Object
        (
            [id] => 4982
            [serviceid] => 66367510921373373822
            [user_id] => 8478
            [action] => 
            [amount] => 5.60
            [rpid] => 9800265903
            [transaction_timestamp] => 0000-00-00 00:00:00
            [created_at] => 2023-12-18 13:36:29
            [bizid] => 7246
            [log_type] => Status Change
            [detail] => Approved by admin
            [status] => Approved
            [username] => ferris
            [expense_id] => 5861
            [issuer] => HardWorkin Inc
            [s3_file_path] => 
            [receipt_status] => 2
            [notes] => testing it
            [requestedamount] => 5.60
            [description] => test
            [category] => Charitable Donations,Clothing Stores
            [s3_file_path1] => 
            [s3_file_path2] => 2467-9800265903/66367510921373373822.jpg
        )

    [17] => stdClass Object
        (
            [id] => 4981
            [serviceid] => 66367510921373373822
            [user_id] => 8478
            [action] => 
            [amount] => 5.60
            [rpid] => 9800265903
            [transaction_timestamp] => 0000-00-00 00:00:00
            [created_at] => 2023-12-18 13:35:39
            [bizid] => 7246
            [log_type] => Status Change
            [detail] => Approved by admin
            [status] => Approved
            [username] => ferris
            [expense_id] => 5861
            [issuer] => HardWorkin Inc
            [s3_file_path] => 
            [receipt_status] => 2
            [notes] => testing it
            [requestedamount] => 5.60
            [description] => test
            [category] => Charitable Donations,Clothing Stores
            [s3_file_path1] => 
            [s3_file_path2] => 2467-9800265903/66367510921373373822.jpg
        )

    [18] => stdClass Object
        (
            [id] => 4980
            [serviceid] => 66367510921373373822
            [user_id] => 8478
            [action] => 
            [amount] => 5.60
            [rpid] => 9800265903
            [transaction_timestamp] => 0000-00-00 00:00:00
            [created_at] => 2023-12-18 13:35:10
            [bizid] => 7246
            [log_type] => Status Change
            [detail] => Approved by admin
            [status] => Approved
            [username] => ferris
            [expense_id] => 5861
            [issuer] => HardWorkin Inc
            [s3_file_path] => 
            [receipt_status] => 2
            [notes] => testing it
            [requestedamount] => 5.60
            [description] => test
            [category] => Charitable Donations,Clothing Stores
            [s3_file_path1] => 
            [s3_file_path2] => 2467-9800265903/66367510921373373822.jpg
        )

    [19] => stdClass Object
        (
            [id] => 4979
            [serviceid] => 66367510921373373822
            [user_id] => 8478
            [action] => 
            [amount] => 5.60
            [rpid] => 9800265903
            [transaction_timestamp] => 0000-00-00 00:00:00
            [created_at] => 2023-12-18 13:35:00
            [bizid] => 7246
            [log_type] => Status Change
            [detail] => Approved by admin
            [status] => Approved
            [username] => ferris
            [expense_id] => 5861
            [issuer] => HardWorkin Inc
            [s3_file_path] => 
            [receipt_status] => 2
            [notes] => testing it
            [requestedamount] => 5.60
            [description] => test
            [category] => Charitable Donations,Clothing Stores
            [s3_file_path1] => 
            [s3_file_path2] => 2467-9800265903/66367510921373373822.jpg
        )

    [20] => stdClass Object
        (
            [id] => 4977
            [serviceid] => 66367510921373373822
            [user_id] => 
            [action] => 
            [amount] => 5.60
            [rpid] => 9800265903
            [transaction_timestamp] => 2023-12-17 18:30:00
            [created_at] => 2023-12-18 01:29:50
            [bizid] => 
            [log_type] => User Submission
            [detail] => 
            [status] => Submitted
            [username] => chetanexpense1
            [expense_id] => 5861
            [issuer] => HardWorkin Inc
            [s3_file_path] => ["2467-9800265903\/66367510921373373822.jpg"]
            [receipt_status] => 2
            [notes] => testing it
            [requestedamount] => 5.60
            [description] => test
            [category] => Charitable Donations,Clothing Stores
            [s3_file_path1] => 
            [s3_file_path2] => 2467-9800265903/66367510921373373822.jpg
        )

    [21] => stdClass Object
        (
            [id] => 4976
            [serviceid] => 11175031115997791087
            [user_id] => 8478
            [action] => 
            [amount] => 0.20
            [rpid] => 9800265903
            [transaction_timestamp] => 0000-00-00 00:00:00
            [created_at] => 2023-12-18 13:13:03
            [bizid] => 7246
            [log_type] => Status Change
            [detail] => Approved by admin
            [status] => Approved
            [username] => ferris
            [expense_id] => 5647
            [issuer] => HardWorkin Inc
            [s3_file_path] => 
            [receipt_status] => 2
            [notes] => task tested
            [requestedamount] => 0.20
            [description] => title
            [category] => Auto Repairs
            [s3_file_path1] => 
            [s3_file_path2] => 6400-9800265903/11175031115997791087.jpg
        )

    [22] => stdClass Object
        (
            [id] => 4974
            [serviceid] => 67335867634038726326
            [user_id] => 8478
            [action] => 
            [amount] => 1.10
            [rpid] => 9800265903
            [transaction_timestamp] => 0000-00-00 00:00:00
            [created_at] => 2023-12-18 13:00:43
            [bizid] => 7246
            [log_type] => Status Change
            [detail] => Rejected by admin
            [status] => Rejected
            [username] => ferris
            [expense_id] => 5845
            [issuer] => HardWorkin Inc
            [s3_file_path] => 
            [receipt_status] => 0
            [notes] => testing going on
            [requestedamount] => 1.10
            [description] => receipt
            [category] => Agricultral Services,Airlines,Auto Repairs
            [s3_file_path1] => 
            [s3_file_path2] => 8146-9800265903/67335867634038726326.jpg
        )

    [23] => stdClass Object
        (
            [id] => 4953
            [serviceid] => 60722476324378016344
            [user_id] => 
            [action] => 
            [amount] => 2.20
            [rpid] => 9800265903
            [transaction_timestamp] => 2022-05-09 18:30:00
            [created_at] => 2023-12-18 10:41:37
            [bizid] => 
            [log_type] => User Submission
            [detail] => 
            [status] => Submitted
            [username] => chetanexpense1
            [expense_id] => 5846
            [issuer] => HardWorkin Inc
            [s3_file_path] => ["4041-9800265903\/60722476324378016344.jpg","7995-9800265903\/60722476324378016344.jpg"]
            [receipt_status] => 0
            [notes] => details added
            [requestedamount] => 2.20
            [description] => testing2
            [category] => Bars Liquor Shop,Beauty,Business Services
            [s3_file_path1] => 
            [s3_file_path2] => 4041-9800265903/60722476324378016344.jpg,7995-9800265903/60722476324378016344.jpg
        )

    [24] => stdClass Object
        (
            [id] => 4952
            [serviceid] => 67335867634038726326
            [user_id] => 
            [action] => 
            [amount] => 1.10
            [rpid] => 9800265903
            [transaction_timestamp] => 2023-12-17 18:30:00
            [created_at] => 2023-12-18 10:39:07
            [bizid] => 
            [log_type] => User Submission
            [detail] => 
            [status] => Submitted
            [username] => chetanexpense1
            [expense_id] => 5845
            [issuer] => HardWorkin Inc
            [s3_file_path] => ["8146-9800265903\/67335867634038726326.jpg"]
            [receipt_status] => 0
            [notes] => testing going on
            [requestedamount] => 1.10
            [description] => receipt
            [category] => Agricultral Services,Airlines,Auto Repairs
            [s3_file_path1] => 
            [s3_file_path2] => 8146-9800265903/67335867634038726326.jpg
        )

    [25] => stdClass Object
        (
            [id] => 4718
            [serviceid] => 11175031115997791087
            [user_id] => 
            [action] => 
            [amount] => 0.20
            [rpid] => 9800265903
            [transaction_timestamp] => 2023-12-13 13:30:00
            [created_at] => 2023-12-14 07:14:16
            [bizid] => 
            [log_type] => User Submission
            [detail] => 
            [status] => Submitted
            [username] => chetanexpense1
            [expense_id] => 5647
            [issuer] => HardWorkin Inc
            [s3_file_path] => ["6400-9800265903\/11175031115997791087.jpg"]
            [receipt_status] => 2
            [notes] => task tested
            [requestedamount] => 0.20
            [description] => title
            [category] => Auto Repairs
            [s3_file_path1] => 
            [s3_file_path2] => 6400-9800265903/11175031115997791087.jpg
        )

    [26] => stdClass Object
        (
            [id] => 4717
            [serviceid] => ae2e0ded-34c7-441d-b546-76c054155848
            [user_id] => 
            [action] => 
            [amount] => 4.39
            [rpid] => 9800265903
            [transaction_timestamp] => 2023-09-30 22:01:09
            [created_at] => 2023-12-14 07:10:37
            [bizid] => 
            [log_type] => User Submission
            [detail] => 
            [status] => Submitted
            [username] => chetanexpense1
            [expense_id] => 1
            [issuer] => HardWorkin Inc
            [s3_file_path] => "721-9800265903\/ae2e0ded-34c7-441d-b546-76c054155848.jpg"
            [receipt_status] => 0
            [notes] => undefined
            [requestedamount] => 1.00
            [description] => Purchase (Internet / Phone) - JOOMDEV, INC. (LAS VEGAS, NV)
            [category] => Other,Transportation - Air,Lodging - Hotel,Office - Cell Phone,Office - Packaging,Office - Office Supplies
            [s3_file_path1] => 2211667/0f854f13-c29e-4268-9b2c-e42856c95f9d.jpg
            [s3_file_path2] => 
        )

    [27] => stdClass Object
        (
            [id] => 4716
            [serviceid] => 38868310528426153194
            [user_id] => 
            [action] => 
            [amount] => 6.00
            [rpid] => 9800265903
            [transaction_timestamp] => 2023-12-13 13:30:00
            [created_at] => 2023-12-14 07:03:52
            [bizid] => 
            [log_type] => User Submission
            [detail] => 
            [status] => Submitted
            [username] => chetanexpense1
            [expense_id] => 5646
            [issuer] => HardWorkin Inc
            [s3_file_path] => ["9724-9800265903\/38868310528426153194.jpg"]
            [receipt_status] => 2
            [notes] => test
            [requestedamount] => 6.00
            [description] => test3
            [category] => Beauty
            [s3_file_path1] => 
            [s3_file_path2] => 9724-9800265903/38868310528426153194.jpg
        )

    [28] => stdClass Object
        (
            [id] => 4471
            [serviceid] => 95846817568872266779
            [user_id] => 
            [action] => 
            [amount] => 0.20
            [rpid] => 9800265903
            [transaction_timestamp] => 2023-12-12 13:30:00
            [created_at] => 2023-12-13 01:31:43
            [bizid] => 
            [log_type] => User Submission
            [detail] => 
            [status] => Submitted
            [username] => chetanexpense1
            [expense_id] => 5476
            [issuer] => HardWorkin Inc
            [s3_file_path] => ["8150-9800265903\/95846817568872266779.jpg"]
            [receipt_status] => 2
            [notes] => trip tested
            [requestedamount] => 0.20
            [description] => trip test
            [category] => Car Rental
            [s3_file_path1] => 
            [s3_file_path2] => 6380-9800271109/7408cd1a-9d4a-41d1-9466-95a744b8e829.jpg
        )

    [29] => stdClass Object
        (
            [id] => 4469
            [serviceid] => 14798503695504194866
            [user_id] => 
            [action] => 
            [amount] => 1.30
            [rpid] => 9800265903
            [transaction_timestamp] => 2023-12-12 13:30:00
            [created_at] => 2023-12-13 00:57:38
            [bizid] => 
            [log_type] => User Submission
            [detail] => 
            [status] => Submitted
            [username] => chetanexpense1
            [expense_id] => 5473
            [issuer] => HardWorkin Inc
            [s3_file_path] => ["4120-9800265903\/14798503695504194866.jpg","6403-9800265903\/14798503695504194866.jpg","548-9800265903\/14798503695504194866.jpg","8634-9800265903\/14798503695504194866.jpg"]
            [receipt_status] => 0
            [notes] => testing 1 added
            [requestedamount] => 1.30
            [description] => testing1
            [category] => Charitable Donations,Clothing Stores
            [s3_file_path1] => 
            [s3_file_path2] => 4120-9800265903/14798503695504194866.jpg,6403-9800265903/14798503695504194866.jpg,548-9800265903/14798503695504194866.jpg,8634-9800265903/14798503695504194866.jpg
        )

    [30] => stdClass Object
        (
            [id] => 4236
            [serviceid] => 17983550043852436495
            [user_id] => 
            [action] => 
            [amount] => 0.10
            [rpid] => 9800265903
            [transaction_timestamp] => 
            [created_at] => 2023-12-12 04:36:25
            [bizid] => 
            [log_type] => User Submission
            [detail] => 
            [status] => Submitted
            [username] => chetanexpense1
            [expense_id] => 5258
            [issuer] => HardWorkin Inc
            [s3_file_path] => []
            [receipt_status] => 0
            [notes] => test
            [requestedamount] => 0.10
            [description] => test
            [category] => Fund Request
            [s3_file_path1] => 
            [s3_file_path2] => 
        )

    [31] => stdClass Object
        (
            [id] => 3933
            [serviceid] => 08040284356217658468
            [user_id] => 
            [action] => 
            [amount] => 1.00
            [rpid] => 9800265903
            [transaction_timestamp] => 2023-12-07 19:00:00
            [created_at] => 2023-12-08 05:58:31
            [bizid] => 
            [log_type] => User Submission
            [detail] => 
            [status] => Submitted
            [username] => chetanexpense1
            [expense_id] => 4971
            [issuer] => HardWorkin Inc
            [s3_file_path] => ["8936-9800265903\/08040284356217658468.jpg"]
            [receipt_status] => 2
            [notes] => test
            [requestedamount] => 1.00
            [description] => test
            [category] => Airlines,Auto Repairs
            [s3_file_path1] => 
            [s3_file_path2] => 8936-9800265903/08040284356217658468.jpg
        )

    [32] => stdClass Object
        (
            [id] => 3930
            [serviceid] => 29513713030074806287
            [user_id] => 
            [action] => 
            [amount] => 3.00
            [rpid] => 9800265903
            [transaction_timestamp] => 2023-12-07 13:30:00
            [created_at] => 2023-12-08 04:57:04
            [bizid] => 
            [log_type] => User Submission
            [detail] => 
            [status] => Submitted
            [username] => chetanexpense1
            [expense_id] => 4968
            [issuer] => HardWorkin Inc
            [s3_file_path] => []
            [receipt_status] => 0
            [notes] => esting
            [requestedamount] => 3.00
            [description] => est
            [category] => Business Services
            [s3_file_path1] => 
            [s3_file_path2] => 
        )

    [33] => stdClass Object
        (
            [id] => 3674
            [serviceid] => 54514515779589411970
            [user_id] => 
            [action] => 
            [amount] => 0.40
            [rpid] => 9800265903
            [transaction_timestamp] => 2023-12-05 13:30:00
            [created_at] => 2023-12-05 21:02:43
            [bizid] => 
            [log_type] => User Submission
            [detail] => 
            [status] => Submitted
            [username] => chetanexpense1
            [expense_id] => 4774
            [issuer] => HardWorkin Inc
            [s3_file_path] => ["9984-9800265903\/54514515779589411970.jpg","5266-9800265903\/54514515779589411970.jpg"]
            [receipt_status] => 2
            [notes] => testing
            [requestedamount] => 0.40
            [description] => test
            [category] => Airlines
            [s3_file_path1] => 
            [s3_file_path2] => 9984-9800265903/54514515779589411970.jpg,5266-9800265903/54514515779589411970.jpg
        )

    [34] => stdClass Object
        (
            [id] => 3672
            [serviceid] => 76457323806016985746
            [user_id] => 
            [action] => 
            [amount] => 0.60
            [rpid] => 9800265903
            [transaction_timestamp] => 2023-12-05 13:30:00
            [created_at] => 2023-12-05 20:48:17
            [bizid] => 
            [log_type] => User Submission
            [detail] => 
            [status] => Submitted
            [username] => chetanexpense1
            [expense_id] => 4772
            [issuer] => HardWorkin Inc
            [s3_file_path] => ["8242-9800265903\/76457323806016985746.jpg","6692-9800265903\/76457323806016985746.jpg"]
            [receipt_status] => 2
            [notes] => testing
            [requestedamount] => 0.60
            [description] => test
            [category] => Auto Repairs
            [s3_file_path1] => 
            [s3_file_path2] => 8242-9800265903/76457323806016985746.jpg,6692-9800265903/76457323806016985746.jpg
        )

    [35] => stdClass Object
        (
            [id] => 3627
            [serviceid] => 95633381692308405686
            [user_id] => 
            [action] => 
            [amount] => 0.90
            [rpid] => 9800265903
            [transaction_timestamp] => 2023-12-05 13:30:00
            [created_at] => 2023-12-06 02:42:58
            [bizid] => 
            [log_type] => User Submission
            [detail] => 
            [status] => Submitted
            [username] => chetanexpense1
            [expense_id] => 4729
            [issuer] => HardWorkin Inc
            [s3_file_path] => []
            [receipt_status] => 2
            [notes] => testing purpose
            [requestedamount] => 0.90
            [description] => testing
            [category] => Beauty
            [s3_file_path1] => 
            [s3_file_path2] => 
        )

    [36] => stdClass Object
        (
            [id] => 3626
            [serviceid] => 99207314020063142035
            [user_id] => 
            [action] => 
            [amount] => 0.50
            [rpid] => 9800265903
            [transaction_timestamp] => 2023-12-05 13:30:00
            [created_at] => 2023-12-06 02:40:34
            [bizid] => 
            [log_type] => User Submission
            [detail] => 
            [status] => Submitted
            [username] => chetanexpense1
            [expense_id] => 4728
            [issuer] => HardWorkin Inc
            [s3_file_path] => ["6996-9800265903\/99207314020063142035.jpg"]
            [receipt_status] => 2
            [notes] => testing purpose only
            [requestedamount] => 0.50
            [description] => test2
            [category] => Airlines,Auto Repairs
            [s3_file_path1] => 
            [s3_file_path2] => 6996-9800265903/99207314020063142035.jpg
        )

    [37] => stdClass Object
        (
            [id] => 3621
            [serviceid] => 79057835922200658807
            [user_id] => 
            [action] => 
            [amount] => 1.70
            [rpid] => 9800265903
            [transaction_timestamp] => 2023-12-03 13:30:00
            [created_at] => 2023-12-06 01:44:12
            [bizid] => 
            [log_type] => User Submission
            [detail] => 
            [status] => Submitted
            [username] => chetanexpense1
            [expense_id] => 4723
            [issuer] => HardWorkin Inc
            [s3_file_path] => []
            [receipt_status] => 2
            [notes] => testing
            [requestedamount] => 1.70
            [description] => test1
            [category] => Airlines
            [s3_file_path1] => 
            [s3_file_path2] => 
        )

    [38] => stdClass Object
        (
            [id] => 3620
            [serviceid] => 95636505390282700034
            [user_id] => 
            [action] => 
            [amount] => 7.10
            [rpid] => 9800265903
            [transaction_timestamp] => 2012-10-26 14:30:00
            [created_at] => 2023-12-06 01:21:56
            [bizid] => 
            [log_type] => User Submission
            [detail] => 
            [status] => Submitted
            [username] => chetanexpense1
            [expense_id] => 4722
            [issuer] => HardWorkin Inc
            [s3_file_path] => ["4631-9800265903\/95636505390282700034.jpg"]
            [receipt_status] => 0
            [notes] => testing on 6 dec 2023
            [requestedamount] => 7.10
            [description] => test7
            [category] => Business Services,Insurance
            [s3_file_path1] => 
            [s3_file_path2] => 4631-9800265903/95636505390282700034.jpg
        )

    [39] => stdClass Object
        (
            [id] => 3518
            [serviceid] => 55901732905205059332
            [user_id] => 
            [action] => 
            [amount] => 3.00
            [rpid] => 9800265903
            [transaction_timestamp] => 2017-04-24 14:30:00
            [created_at] => 2023-12-04 20:42:13
            [bizid] => 
            [log_type] => User Submission
            [detail] => 
            [status] => Submitted
            [username] => chetanexpense1
            [expense_id] => 4626
            [issuer] => HardWorkin Inc
            [s3_file_path] => ["444-9800265903\/55901732905205059332.jpg"]
            [receipt_status] => 0
            [notes] => testingg
            [requestedamount] => 3.00
            [description] => test1
            [category] => Bars Liquor Shop
            [s3_file_path1] => 
            [s3_file_path2] => 444-9800265903/55901732905205059332.jpg
        )

    [40] => stdClass Object
        (
            [id] => 2066
            [serviceid] => 66851871047657374092
            [user_id] => 
            [action] => 
            [amount] => 1.00
            [rpid] => 9800265903
            [transaction_timestamp] => 2023-11-15 00:00:00
            [created_at] => 2023-11-14 02:42:00
            [bizid] => 
            [log_type] => User Submission
            [detail] => 
            [status] => Submitted
            [username] => chetanexpense1
            [expense_id] => 3174
            [issuer] => HardWorkin Inc
            [s3_file_path] => ["5610-9800265903\/66851871047657374092.jpg"]
            [receipt_status] => 2
            [notes] => testing
            [requestedamount] => 1.00
            [description] => test
            [category] => Business Services
            [s3_file_path1] => 
            [s3_file_path2] => 5610-9800265903/66851871047657374092.jpg
        )

    [41] => stdClass Object
        (
            [id] => 2044
            [serviceid] => 59932949566597160107
            [user_id] => 
            [action] => 
            [amount] => 0.50
            [rpid] => 9800265903
            [transaction_timestamp] => 
            [created_at] => 2023-11-14 01:04:06
            [bizid] => 
            [log_type] => User Submission
            [detail] => 
            [status] => Submitted
            [username] => chetanexpense1
            [expense_id] => 3150
            [issuer] => HardWorkin Inc
            [s3_file_path] => []
            [receipt_status] => 0
            [notes] => testing
            [requestedamount] => 0.50
            [description] => description added
            [category] => Fund Request
            [s3_file_path1] => 
            [s3_file_path2] => 
        )

)
{"action":"GetExpenseHistory","success":true,"receiptHistoryModalContent":"<table class=\"table table-bordered\">\n\t\t\t  <thead>\n\t\t\t  <tr>\n\t\t\t  <th>Time<\/th>\n\t\t\t  <th>Type<\/th>\n\t\t\t  <th>Details<\/th>\n\t\t\t  <th>Amount<\/th>\n\t\t\t  <th>Status<\/th>\n\t\t\t  <th>User<\/th>\n\t\t\t  <\/thead>\n\t\t\t  <\/tr>\n\t\t\t  <tbody><tr><td>12\/19\/2023 <br> 09:46:31<\/td><td>User Submission<\/td><td>Expense Submitted<br><br><b>Title: <\/b><br><b>Description: <\/b>test<br><b>Requested Amount: <\/b>1.00<br><b>CH Category: <\/b>Agricultral Services,Airlines<br><b>Receipts: <\/b><div class=\"card\"><img class=\"card-img-top\" src=\"https:\/\/praxellreceipts.s3.amazonaws.com\/4471-9800265903\/14879107917885914247.jpg?AWSAccessKeyId=AKIAVREBARNH2R66RNVV&Expires=1703074875&Signature=JqeUOw%2FnAfiGII5SEjiAL54QSFU%3D\" alt=\"Receipt Image\"><\/div><\/td><td> $ 1.00<\/td><td>Submitted<\/td><td>chetanexpense1<\/td><\/tr><tr><td>12\/19\/2023 <br> 09:45:23<\/td><td>User Submission<\/td><td>Expense Submitted<br><br><b>Title: <\/b><br><b>Description: <\/b>1<br><b>Requested Amount: <\/b>1.00<br><b>CH Category: <\/b>Agricultral Services,Airlines<br><b>Receipts: <\/b><div class=\"card\"><img class=\"card-img-top\" src=\"https:\/\/praxellreceipts.s3.amazonaws.com\/undefined?AWSAccessKeyId=AKIAVREBARNH2R66RNVV&Expires=1703074875&Signature=1aor1VmJ7euUuYIn4s7gZWG46oU%3D\" alt=\"Receipt Image\"><\/div><\/td><td> $ 1.00<\/td><td>Submitted<\/td><td>chetanexpense1<\/td><\/tr><tr><td>12\/19\/2023 <br> 07:52:44<\/td><td>Status Change<\/td><td>Reimbursed by admin<\/td><td> $ 2.10<\/td><td>Reimbursed<\/td><td>ferris<\/td><\/tr><tr><td>12\/19\/2023 <br> 07:48:24<\/td><td>User Submission<\/td><td>Expense Submitted<br><br><b>Title: <\/b><br><b>Description: <\/b>test<br><b>Requested Amount: <\/b>2.10<br><b>CH Category: <\/b>Bars Liquor Shop<br><b>Receipts: <\/b><div class=\"card\"><img class=\"card-img-top\" src=\"https:\/\/praxellreceipts.s3.amazonaws.com\/2985-9800265903\/49797915170566331433.jpg?AWSAccessKeyId=AKIAVREBARNH2R66RNVV&Expires=1703074875&Signature=skRBQ0I8K8EmDnBva%2BrrUaNs3YU%3D\" alt=\"Receipt Image\"><\/div><\/td><td> $ 2.10<\/td><td>Submitted<\/td><td>chetanexpense1<\/td><\/tr><tr><td>12\/19\/2023 <br> 07:31:30<\/td><td>Status Change<\/td><td>Reimbursed by admin<\/td><td> $ 4.40<\/td><td>Reimbursed<\/td><td>ferris<\/td><\/tr><tr><td>12\/19\/2023 <br> 07:16:21<\/td><td>Status Change<\/td><td>Reimbursed by admin<\/td><td> $ 6.60<\/td><td>Reimbursed<\/td><td>ferris<\/td><\/tr><tr><td>12\/19\/2023 <br> 07:15:07<\/td><td>Status Change<\/td><td>Reimbursed by admin<\/td><td> $ 6.60<\/td><td>Reimbursed<\/td><td>ferris<\/td><\/tr><tr><td>12\/19\/2023 <br> 07:14:59<\/td><td>Status Change<\/td><td>Reimbursed by admin<\/td><td> $ 6.60<\/td><td>Reimbursed<\/td><td>ferris<\/td><\/tr><tr><td>12\/19\/2023 <br> 07:04:05<\/td><td>Status Change<\/td><td>Reimbursed by admin<\/td><td> $ 6.60<\/td><td>Reimbursed<\/td><td>ferris<\/td><\/tr><tr><td>12\/19\/2023 <br> 06:47:50<\/td><td>User Submission<\/td><td>Expense Submitted<br><br><b>Title: <\/b><br><b>Description: <\/b>trip title<br><b>Requested Amount: <\/b>6.60<br><b>CH Category: <\/b>Insurance,Jewelry,Laundry<br><b>Receipts: <\/b><div class=\"card\"><img class=\"card-img-top\" src=\"https:\/\/praxellreceipts.s3.amazonaws.com\/338-9800265903\/80983790482834383528.jpg?AWSAccessKeyId=AKIAVREBARNH2R66RNVV&Expires=1703074875&Signature=QqT2ESQns%2FEYRCWQzSQPXoyRenM%3D\" alt=\"Receipt Image\"><\/div><\/td><td> $ 6.60<\/td><td>Submitted<\/td><td>chetanexpense1<\/td><\/tr><tr><td>12\/19\/2023 <br> 06:25:07<\/td><td>User Submission<\/td><td>Expense Submitted<br><br><b>Title: <\/b>testing on 19 dec 2023<br><b>Description: <\/b>trip title<br><b>Requested Amount: <\/b>4.40<br><b>CH Category: <\/b>Transportation - Air,Transportation - Auto Rental,Transportation - Fuel,Transportation - Mileage* @ $0.625 \/ mile,Transportation - Other,Transportation - Parking \/ Tolls<br><b>Receipts: <\/b><div class=\"card\"><img class=\"card-img-top\" src=\"https:\/\/praxellreceipts.s3.amazonaws.com\/2963-9800265903\/57555217729364871460.jpg?AWSAccessKeyId=AKIAVREBARNH2R66RNVV&Expires=1703074875&Signature=VfFDFLK6p8yv1oxdrjQ0lzrCO8Y%3D\" alt=\"Receipt Image\"><\/div><div class=\"card\"><img class=\"card-img-top\" src=\"https:\/\/praxellreceipts.s3.amazonaws.com\/2313-9800265903\/57555217729364871460.jpg?AWSAccessKeyId=AKIAVREBARNH2R66RNVV&Expires=1703074875&Signature=DYdIWabPwojuNt5GtCbSvXiaWL4%3D\" alt=\"Receipt Image\"><\/div><\/td><td> $ 4.40<\/td><td>Submitted<\/td><td>chetanexpense1<\/td><\/tr><tr><td>12\/18\/2023 <br> 13:45:47<\/td><td>Status Change<\/td><td>Rejected by admin<\/td><td> $ 8.00<\/td><td>Rejected<\/td><td>ferris<\/td><\/tr><tr><td>12\/18\/2023 <br> 01:43:31<\/td><td>User Submission<\/td><td>Expense Submitted<br><br><b>Title: <\/b>test<br><b>Description: <\/b>test<br><b>Requested Amount: <\/b>8.00<br><b>CH Category: <\/b>Car Rental<br><b>Receipts: <\/b><div class=\"card\"><img class=\"card-img-top\" src=\"https:\/\/praxellreceipts.s3.amazonaws.com\/9801-9800265903\/34093462229712290235.jpg?AWSAccessKeyId=AKIAVREBARNH2R66RNVV&Expires=1703074875&Signature=VJRfsprHsggTPuqOzGmQzaCKK1s%3D\" alt=\"Receipt Image\"><\/div><\/td><td> $ 8.00<\/td><td>Submitted<\/td><td>chetanexpense1<\/td><\/tr><tr><td>12\/18\/2023 <br> 13:37:20<\/td><td>Status Change<\/td><td>Approved by admin<\/td><td> $ 5.60<\/td><td>Approved<\/td><td>ferris<\/td><\/tr><tr><td>12\/18\/2023 <br> 13:37:06<\/td><td>Status Change<\/td><td>Approved by admin<\/td><td> $ 5.60<\/td><td>Approved<\/td><td>ferris<\/td><\/tr><tr><td>12\/18\/2023 <br> 13:36:44<\/td><td>Status Change<\/td><td>Approved by admin<\/td><td> $ 5.60<\/td><td>Approved<\/td><td>ferris<\/td><\/tr><tr><td>12\/18\/2023 <br> 13:36:29<\/td><td>Status Change<\/td><td>Approved by admin<\/td><td> $ 5.60<\/td><td>Approved<\/td><td>ferris<\/td><\/tr><tr><td>12\/18\/2023 <br> 13:35:39<\/td><td>Status Change<\/td><td>Approved by admin<\/td><td> $ 5.60<\/td><td>Approved<\/td><td>ferris<\/td><\/tr><tr><td>12\/18\/2023 <br> 13:35:10<\/td><td>Status Change<\/td><td>Approved by admin<\/td><td> $ 5.60<\/td><td>Approved<\/td><td>ferris<\/td><\/tr><tr><td>12\/18\/2023 <br> 13:35:00<\/td><td>Status Change<\/td><td>Approved by admin<\/td><td> $ 5.60<\/td><td>Approved<\/td><td>ferris<\/td><\/tr><tr><td>12\/18\/2023 <br> 01:29:50<\/td><td>User Submission<\/td><td>Expense Submitted<br><br><b>Title: <\/b>testing it<br><b>Description: <\/b>test<br><b>Requested Amount: <\/b>5.60<br><b>CH Category: <\/b>Charitable Donations,Clothing Stores<br><b>Receipts: <\/b><div class=\"card\"><img class=\"card-img-top\" src=\"https:\/\/praxellreceipts.s3.amazonaws.com\/2467-9800265903\/66367510921373373822.jpg?AWSAccessKeyId=AKIAVREBARNH2R66RNVV&Expires=1703074875&Signature=gjqzH6nCNIdlxguktoIeDAt2y24%3D\" alt=\"Receipt Image\"><\/div><\/td><td> $ 5.60<\/td><td>Submitted<\/td><td>chetanexpense1<\/td><\/tr><tr><td>12\/18\/2023 <br> 13:13:03<\/td><td>Status Change<\/td><td>Approved by admin<\/td><td> $ 0.20<\/td><td>Approved<\/td><td>ferris<\/td><\/tr><tr><td>12\/18\/2023 <br> 13:00:43<\/td><td>Status Change<\/td><td>Rejected by admin<\/td><td> $ 1.10<\/td><td>Rejected<\/td><td>ferris<\/td><\/tr><tr><td>12\/18\/2023 <br> 10:41:37<\/td><td>User Submission<\/td><td>Expense Submitted<br><br><b>Title: <\/b>details added<br><b>Description: <\/b>testing2<br><b>Requested Amount: <\/b>2.20<br><b>CH Category: <\/b>Bars Liquor Shop,Beauty,Business Services<br><b>Receipts: <\/b><div class=\"card\"><img class=\"card-img-top\" src=\"https:\/\/praxellreceipts.s3.amazonaws.com\/4041-9800265903\/60722476324378016344.jpg?AWSAccessKeyId=AKIAVREBARNH2R66RNVV&Expires=1703074875&Signature=%2BxbYEd2bFy%2FUM1JOjM7BAYiQDwQ%3D\" alt=\"Receipt Image\"><\/div><div class=\"card\"><img class=\"card-img-top\" src=\"https:\/\/praxellreceipts.s3.amazonaws.com\/7995-9800265903\/60722476324378016344.jpg?AWSAccessKeyId=AKIAVREBARNH2R66RNVV&Expires=1703074875&Signature=xNLY%2FrO0CkXqgcVdLs6P3rvWFWM%3D\" alt=\"Receipt Image\"><\/div><\/td><td> $ 2.20<\/td><td>Submitted<\/td><td>chetanexpense1<\/td><\/tr><tr><td>12\/18\/2023 <br> 10:39:07<\/td><td>User Submission<\/td><td>Expense Submitted<br><br><b>Title: <\/b>testing going on<br><b>Description: <\/b>receipt<br><b>Requested Amount: <\/b>1.10<br><b>CH Category: <\/b>Agricultral Services,Airlines,Auto Repairs<br><b>Receipts: <\/b><div class=\"card\"><img class=\"card-img-top\" src=\"https:\/\/praxellreceipts.s3.amazonaws.com\/8146-9800265903\/67335867634038726326.jpg?AWSAccessKeyId=AKIAVREBARNH2R66RNVV&Expires=1703074875&Signature=X4CiqXqUMULX7PRxK3UQS2LlZbU%3D\" alt=\"Receipt Image\"><\/div><\/td><td> $ 1.10<\/td><td>Submitted<\/td><td>chetanexpense1<\/td><\/tr><tr><td>12\/14\/2023 <br> 07:14:16<\/td><td>User Submission<\/td><td>Expense Submitted<br><br><b>Title: <\/b>task tested<br><b>Description: <\/b>title<br><b>Requested Amount: <\/b>0.20<br><b>CH Category: <\/b>Auto Repairs<br><b>Receipts: <\/b><div class=\"card\"><img class=\"card-img-top\" src=\"https:\/\/praxellreceipts.s3.amazonaws.com\/6400-9800265903\/11175031115997791087.jpg?AWSAccessKeyId=AKIAVREBARNH2R66RNVV&Expires=1703074875&Signature=M0FccUzCYMThCJYdEic2jRgXfIo%3D\" alt=\"Receipt Image\"><\/div><\/td><td> $ 0.20<\/td><td>Submitted<\/td><td>chetanexpense1<\/td><\/tr><tr><td>12\/14\/2023 <br> 07:10:37<\/td><td>User Submission<\/td><td>Expense Submitted<br><br><b>Title: <\/b>undefined<br><b>Description: <\/b>Purchase (Internet \/ Phone) - JOOMDEV, INC. (LAS VEGAS, NV)<br><b>Requested Amount: <\/b>1.00<br><b>CH Category: <\/b>Other,Transportation - Air,Lodging - Hotel,Office - Cell Phone,Office - Packaging,Office - Office Supplies<br><b>Receipts: <\/b><div class=\"card\"><img class=\"card-img-top\" src=\"https:\/\/praxellreceipts.s3.amazonaws.com\/2211667\/0f854f13-c29e-4268-9b2c-e42856c95f9d.jpg?AWSAccessKeyId=AKIAVREBARNH2R66RNVV&Expires=1703074875&Signature=7JsABAft6Q4e2lMi1mBRm9EwbN4%3D\" alt=\"Receipt Image\"><\/div><\/td><td> $ 4.39<\/td><td>Submitted<\/td><td>chetanexpense1<\/td><\/tr><tr><td>12\/14\/2023 <br> 07:03:52<\/td><td>User Submission<\/td><td>Expense Submitted<br><br><b>Title: <\/b>test<br><b>Description: <\/b>test3<br><b>Requested Amount: <\/b>6.00<br><b>CH Category: <\/b>Beauty<br><b>Receipts: <\/b><div class=\"card\"><img class=\"card-img-top\" src=\"https:\/\/praxellreceipts.s3.amazonaws.com\/9724-9800265903\/38868310528426153194.jpg?AWSAccessKeyId=AKIAVREBARNH2R66RNVV&Expires=1703074875&Signature=1ZYdBrzRmm96e%2FS%2Fl9Or81%2BMtMc%3D\" alt=\"Receipt Image\"><\/div><\/td><td> $ 6.00<\/td><td>Submitted<\/td><td>chetanexpense1<\/td><\/tr><tr><td>12\/13\/2023 <br> 01:31:43<\/td><td>User Submission<\/td><td>Expense Submitted<br><br><b>Title: <\/b>trip tested<br><b>Description: <\/b>trip test<br><b>Requested Amount: <\/b>0.20<br><b>CH Category: <\/b>Car Rental<br><b>Receipts: <\/b><div class=\"card\"><img class=\"card-img-top\" src=\"https:\/\/praxellreceipts.s3.amazonaws.com\/6380-9800271109\/7408cd1a-9d4a-41d1-9466-95a744b8e829.jpg?AWSAccessKeyId=AKIAVREBARNH2R66RNVV&Expires=1703074875&Signature=X5oyJSSv4CFU4gGfVXaCX0adid8%3D\" alt=\"Receipt Image\"><\/div><\/td><td> $ 0.20<\/td><td>Submitted<\/td><td>chetanexpense1<\/td><\/tr><tr><td>12\/13\/2023 <br> 00:57:38<\/td><td>User Submission<\/td><td>Expense Submitted<br><br><b>Title: <\/b>testing 1 added<br><b>Description: <\/b>testing1<br><b>Requested Amount: <\/b>1.30<br><b>CH Category: <\/b>Charitable Donations,Clothing Stores<br><b>Receipts: <\/b><div class=\"card\"><img class=\"card-img-top\" src=\"https:\/\/praxellreceipts.s3.amazonaws.com\/4120-9800265903\/14798503695504194866.jpg?AWSAccessKeyId=AKIAVREBARNH2R66RNVV&Expires=1703074875&Signature=28XTWdkhlGF5ZH6PhFEbT0yKh%2FA%3D\" alt=\"Receipt Image\"><\/div><div class=\"card\"><img class=\"card-img-top\" src=\"https:\/\/praxellreceipts.s3.amazonaws.com\/6403-9800265903\/14798503695504194866.jpg?AWSAccessKeyId=AKIAVREBARNH2R66RNVV&Expires=1703074875&Signature=cBKzF2dXk02MkbvLLYnDFlFNwVk%3D\" alt=\"Receipt Image\"><\/div><div class=\"card\"><img class=\"card-img-top\" src=\"https:\/\/praxellreceipts.s3.amazonaws.com\/548-9800265903\/14798503695504194866.jpg?AWSAccessKeyId=AKIAVREBARNH2R66RNVV&Expires=1703074875&Signature=RlqkHptfmO1WepjW2nCyCtEwVZU%3D\" alt=\"Receipt Image\"><\/div><div class=\"card\"><img class=\"card-img-top\" src=\"https:\/\/praxellreceipts.s3.amazonaws.com\/8634-9800265903\/14798503695504194866.jpg?AWSAccessKeyId=AKIAVREBARNH2R66RNVV&Expires=1703074875&Signature=qp4Yj%2FhKXcZIvHxPzwsIdzPxTBk%3D\" alt=\"Receipt Image\"><\/div><\/td><td> $ 1.30<\/td><td>Submitted<\/td><td>chetanexpense1<\/td><\/tr><tr><td>12\/12\/2023 <br> 04:36:25<\/td><td>User Submission<\/td><td>Expense Submitted<br><br><b>Title: <\/b>test<br><b>Description: <\/b>test<br><b>Requested Amount: <\/b>0.10<br><b>CH Category: <\/b>Fund Request<br><b>Receipts: <\/b><\/td><td> $ 0.10<\/td><td>Submitted<\/td><td>chetanexpense1<\/td><\/tr><tr><td>12\/08\/2023 <br> 05:58:31<\/td><td>User Submission<\/td><td>Expense Submitted<br><br><b>Title: <\/b>test<br><b>Description: <\/b>test<br><b>Requested Amount: <\/b>1.00<br><b>CH Category: <\/b>Airlines,Auto Repairs<br><b>Receipts: <\/b><div class=\"card\"><img class=\"card-img-top\" src=\"https:\/\/praxellreceipts.s3.amazonaws.com\/8936-9800265903\/08040284356217658468.jpg?AWSAccessKeyId=AKIAVREBARNH2R66RNVV&Expires=1703074875&Signature=%2BHy%2BbpFl3PsFxaNfVKjmu%2BQyGHQ%3D\" alt=\"Receipt Image\"><\/div><\/td><td> $ 1.00<\/td><td>Submitted<\/td><td>chetanexpense1<\/td><\/tr><tr><td>12\/08\/2023 <br> 04:57:04<\/td><td>User Submission<\/td><td>Expense Submitted<br><br><b>Title: <\/b>esting<br><b>Description: <\/b>est<br><b>Requested Amount: <\/b>3.00<br><b>CH Category: <\/b>Business Services<br><b>Receipts: <\/b><\/td><td> $ 3.00<\/td><td>Submitted<\/td><td>chetanexpense1<\/td><\/tr><tr><td>12\/05\/2023 <br> 21:02:43<\/td><td>User Submission<\/td><td>Expense Submitted<br><br><b>Title: <\/b>testing<br><b>Description: <\/b>test<br><b>Requested Amount: <\/b>0.40<br><b>CH Category: <\/b>Airlines<br><b>Receipts: <\/b><div class=\"card\"><img class=\"card-img-top\" src=\"https:\/\/praxellreceipts.s3.amazonaws.com\/9984-9800265903\/54514515779589411970.jpg?AWSAccessKeyId=AKIAVREBARNH2R66RNVV&Expires=1703074875&Signature=HXEcJD%2F3L4JXqRQ4HrVuFjyRGvk%3D\" alt=\"Receipt Image\"><\/div><div class=\"card\"><img class=\"card-img-top\" src=\"https:\/\/praxellreceipts.s3.amazonaws.com\/5266-9800265903\/54514515779589411970.jpg?AWSAccessKeyId=AKIAVREBARNH2R66RNVV&Expires=1703074875&Signature=OfS3Ulabn%2FxQnJusABNXSVfejQE%3D\" alt=\"Receipt Image\"><\/div><\/td><td> $ 0.40<\/td><td>Submitted<\/td><td>chetanexpense1<\/td><\/tr><tr><td>12\/05\/2023 <br> 20:48:17<\/td><td>User Submission<\/td><td>Expense Submitted<br><br><b>Title: <\/b>testing<br><b>Description: <\/b>test<br><b>Requested Amount: <\/b>0.60<br><b>CH Category: <\/b>Auto Repairs<br><b>Receipts: <\/b><div class=\"card\"><img class=\"card-img-top\" src=\"https:\/\/praxellreceipts.s3.amazonaws.com\/8242-9800265903\/76457323806016985746.jpg?AWSAccessKeyId=AKIAVREBARNH2R66RNVV&Expires=1703074875&Signature=5ZREH%2BdxiPW4D0y4DLVNAlxvmIE%3D\" alt=\"Receipt Image\"><\/div><div class=\"card\"><img class=\"card-img-top\" src=\"https:\/\/praxellreceipts.s3.amazonaws.com\/6692-9800265903\/76457323806016985746.jpg?AWSAccessKeyId=AKIAVREBARNH2R66RNVV&Expires=1703074875&Signature=0Fki0kLqc5iJJq22hqbK9r51Z8o%3D\" alt=\"Receipt Image\"><\/div><\/td><td> $ 0.60<\/td><td>Submitted<\/td><td>chetanexpense1<\/td><\/tr><tr><td>12\/06\/2023 <br> 02:42:58<\/td><td>User Submission<\/td><td>Expense Submitted<br><br><b>Title: <\/b>testing purpose<br><b>Description: <\/b>testing<br><b>Requested Amount: <\/b>0.90<br><b>CH Category: <\/b>Beauty<br><b>Receipts: <\/b><\/td><td> $ 0.90<\/td><td>Submitted<\/td><td>chetanexpense1<\/td><\/tr><tr><td>12\/06\/2023 <br> 02:40:34<\/td><td>User Submission<\/td><td>Expense Submitted<br><br><b>Title: <\/b>testing purpose only<br><b>Description: <\/b>test2<br><b>Requested Amount: <\/b>0.50<br><b>CH Category: <\/b>Airlines,Auto Repairs<br><b>Receipts: <\/b><div class=\"card\"><img class=\"card-img-top\" src=\"https:\/\/praxellreceipts.s3.amazonaws.com\/6996-9800265903\/99207314020063142035.jpg?AWSAccessKeyId=AKIAVREBARNH2R66RNVV&Expires=1703074875&Signature=B2v1BrT1FclJ6ZOPlP07%2BjYBVAo%3D\" alt=\"Receipt Image\"><\/div><\/td><td> $ 0.50<\/td><td>Submitted<\/td><td>chetanexpense1<\/td><\/tr><tr><td>12\/06\/2023 <br> 01:44:12<\/td><td>User Submission<\/td><td>Expense Submitted<br><br><b>Title: <\/b>testing<br><b>Description: <\/b>test1<br><b>Requested Amount: <\/b>1.70<br><b>CH Category: <\/b>Airlines<br><b>Receipts: <\/b><\/td><td> $ 1.70<\/td><td>Submitted<\/td><td>chetanexpense1<\/td><\/tr><tr><td>12\/06\/2023 <br> 01:21:56<\/td><td>User Submission<\/td><td>Expense Submitted<br><br><b>Title: <\/b>testing on 6 dec 2023<br><b>Description: <\/b>test7<br><b>Requested Amount: <\/b>7.10<br><b>CH Category: <\/b>Business Services,Insurance<br><b>Receipts: <\/b><div class=\"card\"><img class=\"card-img-top\" src=\"https:\/\/praxellreceipts.s3.amazonaws.com\/4631-9800265903\/95636505390282700034.jpg?AWSAccessKeyId=AKIAVREBARNH2R66RNVV&Expires=1703074875&Signature=gqmouxiqb9cmUAb6ZH2c8ePnWfU%3D\" alt=\"Receipt Image\"><\/div><\/td><td> $ 7.10<\/td><td>Submitted<\/td><td>chetanexpense1<\/td><\/tr><tr><td>12\/04\/2023 <br> 20:42:13<\/td><td>User Submission<\/td><td>Expense Submitted<br><br><b>Title: <\/b>testingg<br><b>Description: <\/b>test1<br><b>Requested Amount: <\/b>3.00<br><b>CH Category: <\/b>Bars Liquor Shop<br><b>Receipts: <\/b><div class=\"card\"><img class=\"card-img-top\" src=\"https:\/\/praxellreceipts.s3.amazonaws.com\/444-9800265903\/55901732905205059332.jpg?AWSAccessKeyId=AKIAVREBARNH2R66RNVV&Expires=1703074875&Signature=qqkOmHlw%2FIvAy1hMO%2Bl4QOKcL%2Bg%3D\" alt=\"Receipt Image\"><\/div><\/td><td> $ 3.00<\/td><td>Submitted<\/td><td>chetanexpense1<\/td><\/tr><tr><td>11\/14\/2023 <br> 02:42:00<\/td><td>User Submission<\/td><td>Expense Submitted<br><br><b>Title: <\/b>testing<br><b>Description: <\/b>test<br><b>Requested Amount: <\/b>1.00<br><b>CH Category: <\/b>Business Services<br><b>Receipts: <\/b><div class=\"card\"><img class=\"card-img-top\" src=\"https:\/\/praxellreceipts.s3.amazonaws.com\/5610-9800265903\/66851871047657374092.jpg?AWSAccessKeyId=AKIAVREBARNH2R66RNVV&Expires=1703074875&Signature=0WLMqI4WLG7tv9f8XjwWvtz9liw%3D\" alt=\"Receipt Image\"><\/div><\/td><td> $ 1.00<\/td><td>Submitted<\/td><td>chetanexpense1<\/td><\/tr><tr><td>11\/14\/2023 <br> 01:04:06<\/td><td>User Submission<\/td><td>Expense Submitted<br><br><b>Title: <\/b>testing<br><b>Description: <\/b>description added<br><b>Requested Amount: <\/b>0.50<br><b>CH Category: <\/b>Fund Request<br><b>Receipts: <\/b><\/td><td> $ 0.50<\/td><td>Submitted<\/td><td>chetanexpense1<\/td><\/tr><\/tbody>\n\t\t\t  <\/table>","showReceiptHistoryModal":true}













<style>
 .center-container {
     display: flex;
     justify-content: center;
     align-items: center;
     max-width: 800px; /* Adjust the maximum width as needed */
   min-width: 400px; /* Set your minimum width */
   margin: 0 auto; /* Center the container horizontally */
   padding: 20px; /* Add padding for better appearance */
   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Adjust the values for your preferred box shadow */
 }


 table {
     margin: auto;
 }

 .center-text {
     text-align: center;
   }

   .header {
     font-size: 20px;
     font-family: "Arial", sans-serif;
   }

   .spacer {
     line-height: 1.55pt;
   }

   .role {
     font-size: 13px;
     font-family: "Arial", sans-serif;
     color: #6F7878;
   }

   .inline-list {
     list-style: none;
     padding: 0;
     margin: 0;
     display: inline;
   }

   .list-item {
     display: inline;
     font-size: 12px;
     font-family: "Arial", sans-serif;
     color: #384347;
   }

   .separator {
     border: 2px solid #384347;
     width: 50%;
     margin: auto;
   }

   .summary {
     font-size: 15px;
     font-family: "Arial", sans-serif;
   }

   .question {
     font-size: 13px;
     font-family: "Arial", sans-serif;
     color: #384347;
   }

   .vertical-space {
     line-height: 6.25pt;
   }
  .experience-section {
    display: grid;
    grid-template-columns: 1fr 1fr; /* Two equal columns */
    grid-gap: 20px; /* Adjust the gap as needed */
    margin-bottom: 20px;
  }

 

       .company-name {
           font-weight: bold;
           margin-bottom: 5px;
           font-size: 13px;
       }

       .title {
           margin-top: 0;
           margin-bottom: 10px;
       }

       .roles-responsibilities {
           font-weight: bold;
           margin-bottom: 5px;
       }

       .ul {
           list-style-type: none;
           padding: 0;
           margin: 0;
           font-size: 11px;
       }

       .li {
           margin-bottom: 5px;
       }

      

       .location {
           margin-bottom: 5px;
       }

       .date {
           margin-top: 0;
       }

       
       .add-button {
           background-color: #4CAF50; /* Green background */
           color: white; /* White text color */
           padding: 10px 20px; /* Padding for better appearance */
           border: none; /* No border */
           border-radius: 5px; /* Optional: Rounded corners */
           cursor: pointer; /* Cursor style on hover */
       }

       .add-button:hover {
           background-color: #45a049; /* Darker green on hover */
       }
</style>


  [1] => stdClass Object
        (
            [id] => 6015
            [serviceid] => 79512782923638836152
            [notes] => 
            [s3_file_path] => 
            [s3_file_paths] => 8544-9800265903/79512782923638836152.jpg
            [rpid] => 9800265903
            [amount] => 2.00
            [amount_original] => 2.00
            [description] => 2
            [category] => Auto Repairs
            [transaction_timestamp] => 2023-12-19 18:30:00
            [created_at] => 2023-12-20 08:52:05
            [updated_at] => 2023-12-20 08:52:05
            [issuer_name] => HardWorkin Inc
            [status] => 0
            [reimburse_amount] => 0
            [reimburse_date] => 
            [reimburse_serviceid] => 
            [enabled] => 0
            [paid] => 0
            [failed] => 0
            [failed_error] => 
            [rejected] => 0
            [mcc_description] => 
            [manual] => 1
            [reason] => 2
            [s3_file_path_json] => ["8544-9800265903\/79512782923638836152.jpg"]
            [receipt_notes] => 
            [source] => mobile
            [firstname] => Chetan
            [lastname] => Madaan
            [cardnumber] => 1080
        )
cv for nhs job, cv for nhs, nhs cv example, nhs cv format, nhs cv example