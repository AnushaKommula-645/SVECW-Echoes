import "./terms.css"; 

function Terms() {
    return (
        <center>
            <div className="card">
                <h1>Terms & Conditions</h1>
                <p><strong>1. User Responsibility</strong></p>
                <ul>
                    <li>Users must post relevant and appropriate content.</li>
                    <li>Any misleading, offensive, or illegal content is strictly prohibited.</li>
                </ul>

                <p><strong>2. Admin Rights</strong></p>
                <ul>
                    <li>The admin reserves the right to remove any content that violates community standards.</li>
                    <li>Users who post inappropriate content or misuse the platform may be removed.</li>
                    <li>Outside users (non-SVECW students) are not allowed and will be removed by the admin.</li>
                </ul>

                <p><strong>3. Usage Restrictions</strong></p>
                <ul>
                    <li>No spam, advertisements, or content unrelated to SVECW activities.</li>
                    <li>Users must respect others and avoid harmful discussions.</li>
                </ul>

                <p><strong>4. Changes to Terms</strong></p>
                <p>The platform admin can update these terms as needed.</p>

                <p>By using <strong>SVECW Echoes</strong>, you agree to these terms.</p>
            </div>
        </center>
    );
}

export default Terms;
