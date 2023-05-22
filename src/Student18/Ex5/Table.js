import React, { useState } from 'react';


export const Table = () => {
	const [show, setShow] = useState(false);

	return (
		<div>
			<table>
				<tbody>
					<tr>
						<th>Balance: </th>
						<td>$1,000,000</td>
					</tr>
					<tr>
						<th>Interest: </th>
						<td>5%</td>
					</tr>
					<tr>
						<th>Account Number: </th>
						<td>{show ? <span> 111-222-333 </span> : null}</td>
						<td>
							<button onClick={() => setShow(!show)}>
								{show ? 'Hide' : 'Show'}
							</button>
						</td>
					</tr>
					<tr></tr>
				</tbody>
			</table>
		</div>
	);
};
