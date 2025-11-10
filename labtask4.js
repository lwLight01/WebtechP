function validateForm() {
  const firstname = document.getElementById('firstname').value;
  const lastname = document.getElementById("lastname").value;
  const email = document.getElementById("email").value;
  const donationAmount = document.querySelector('input[name="amount"]:checked');

  if (!firstname || !lastname || !email || !donationAmount) {
    alert("All required fields must be filled!");
    return false;
  }

  if (!validateEmail(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  return true;
}

function validateEmail(email) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regex.test(email);
}

document.querySelectorAll('input[name="amount"]').forEach(radioButton => {
  radioButton.addEventListener('change', function () {
    const otherAmountField = document.getElementById('otheramount');
    if (this.value === 'other') {
      otherAmountField.style.display = 'block';
    } else {
      otherAmountField.style.display = 'none';
    }
  });
});

document.getElementById('recurring').addEventListener('change', function () {
  const recurringFields = document.querySelector('.recurring-fields');
  if (recurringFields) {
    recurringFields.style.display = this.checked ? 'block' : 'none';
  }
});

window.onload = function () {
  document.getElementById("state").value = "Dhaka";
  document.getElementById("country").value = "Bangladesh";
};

const resetButton = document.querySelector('input[type="reset"]');
resetButton.addEventListener('click', function (event) {
  const confirmation = confirm("Are you sure you want to reset the form?");
  if (!confirmation) {
    event.preventDefault();
  }
});

document.querySelectorAll('input[name="donation_type"]').forEach((radioButton) => {
  radioButton.addEventListener('change', function () {
    const nameField = document.querySelector('input[name="honor_name"]');
    if (this.value === 'honor') {
      nameField.placeholder = "Name to honor";
    } else if (this.value === 'memory') {
      nameField.placeholder = "Name in memory of";
    }
  });
});

document.getElementById("comments").addEventListener('input', function () {
  const charLimit = 200;
  const currentLength = this.value.length;
  if (currentLength > charLimit) {
    alert("Character limit reached!");
    this.value = this.value.substring(0, charLimit);
  }
});

const monthlyAmountInput = document.querySelector('input[name="monthly_amount"]');
if (monthlyAmountInput) {
  monthlyAmountInput.addEventListener('input', function () {
    const monthlyAmount = parseFloat(this.value) || 0;
    const months = parseInt(document.querySelector('input[name="months"]').value) || 0;
    const total = monthlyAmount * months;
    const totalElement = document.createElement('p');
    totalElement.textContent = `Total donation for ${months} months: $${total}`;
    document.querySelector('.recurring-fields').appendChild(totalElement);
  });
}
