import supabase from "./supabase.js";

document.addEventListener("DOMContentLoaded", () => {

    const bookingForm = document.getElementById("bookingForm");

    if (!bookingForm) return;

    // --- 💾 PRE-FILL SAVED NAME & PHONE FROM BROWSER ---
    // Website ulla thirumbavum vantha pazhaya Name, Phone automatic-aa vanthidum
    const savedName = localStorage.getItem("customer_name");
    const savedPhone = localStorage.getItem("customer_phone");

    if (savedName) document.getElementById("customer_name").value = savedName;
    if (savedPhone) document.getElementById("phone").value = savedPhone;
    // ----------------------------------------------------

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

        // --- 🔒 LOCK NAME & PHONE IN BROWSER MEMORY ---
        // Veliyila poyittu thirumbavum vantha data save aahi irukka ithu thaan kaaranam
        localStorage.setItem("customer_name", customer_name);
        localStorage.setItem("customer_phone", phone);
        // ----------------------------------------------

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

        // --- 🚀 WHATSAPP REDIRECTION LOGIC ---
        // Database-la vizhunthathum owner unique number-uku instant-aa msg pogum
        const ownerNumber = "919442452059"; 
        const whatsappMessage = `Hello SBT Aqua Roots, I have a new enquiry!\n\n👤 Name: ${customer_name}\n📞 Phone: ${phone}\n📦 Product: ${product_name}\n🔢 Quantity: ${quantity}\n📍 Address: ${address || 'Not Provided'}`;

        window.open(`https://wa.me/${ownerNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
        // -------------------------------------

        bookingForm.reset();

        // Form reset aana piragum browser memory-la irukra values thirumbavum box kulla ulla fill aahidum
        document.getElementById("customer_name").value = customer_name;
        document.getElementById("phone").value = phone;

        button.disabled = false;
        button.innerText = "Send Enquiry";

    });

});