import supabase from "./supabase.js";

document.addEventListener("DOMContentLoaded", () => {

    const bookingForm = document.getElementById("bookingForm");

    if (!bookingForm) return;

    bookingForm.addEventListener("submit", async (e) => {

        e.preventDefault();

        const button = bookingForm.querySelector("button");

        button.disabled = true;
        button.innerText = "Sending...";

        const customer_name = document.getElementById("customer_name").value.trim();

        const phone = document.getElementById("phone").value.trim();

        const product_name = document.getElementById("product_name").value;

        const quantity = parseInt(document.getElementById("quantity").value);

        const address = document.getElementById("address").value.trim();

        if (
            customer_name === "" ||
            phone === "" ||
            product_name === "" ||
            isNaN(quantity)
        ) {

            alert("Please fill all required fields.");

            button.disabled = false;
            button.innerText = "Send Enquiry";

            return;

        }

        const { error } = await supabase
            .from("bookings")
            .insert([
                {
                    customer_name,
                    phone,
                    product_name,
                    quantity,
                    address
                }
            ]);

        if (error) {

            console.error(error);

            alert("❌ Failed to send enquiry.");

            button.disabled = false;
            button.innerText = "Send Enquiry";

            return;

        }

        alert("✅ Your enquiry has been sent successfully.");

        bookingForm.reset();

        button.disabled = false;
        button.innerText = "Send Enquiry";

    });

});