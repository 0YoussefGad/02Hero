function getUsers() {
    const users = localStorage.getItem('users');
    return users ? JSON.parse(users) : [];
}

function saveUsers(users) {
    localStorage.setItem('users', JSON.stringify(users));
}

function emailExists(email, users) {
    return users.some(user => user.email === email);
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isStrongPassword(password) {
    return password.length >= 8;
}

function showMessage(elementId, text, type) {
    const messageElement = document.getElementById(elementId);
    if (messageElement) {
        messageElement.textContent = text;
        messageElement.className = `message ${type}`;
        setTimeout(() => {
            messageElement.style.display = 'none';
            messageElement.className = 'message';
        }, 3000);
    }
}

if (document.getElementById('registerForm')) {
    const registerForm = document.getElementById('registerForm');

    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const fullName = document.getElementById('fullName').value.trim();
        const email = document.getElementById('regEmail').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const password = document.getElementById('regPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const termsAccepted = document.getElementById('termsCheck').checked;

        if (!fullName || !email || !password) {
            showMessage('regMessage', 'الرجاء ملء جميع الحقول المطلوبة', 'error');
            return;
        }

        if (!isStrongPassword(password)) {
            showMessage('regMessage', 'كلمة المرور يجب أن تكون 8 أحرف على الأقل', 'error');
            return;
        }

        if (password !== confirmPassword) {
            showMessage('regMessage', 'كلمة المرور غير متطابقة', 'error');
            return;
        }

        if (!isValidEmail(email)) {
            showMessage('regMessage', 'البريد الإلكتروني غير صالح', 'error');
            return;
        }

        if (!termsAccepted) {
            showMessage('regMessage', 'يجب الموافقة على الشروط والأحكام', 'error');
            return;
        }

        const users = getUsers();

        if (emailExists(email, users)) {
            showMessage('regMessage', 'هذا البريد مسجل بالفعل', 'error');
            return;
        }

        const newUser = {
            id: Date.now(),
            fullName: fullName,
            email: email,
            phone: phone,
            password: password,
            createdAt: new Date().toISOString()
        };

        users.push(newUser);
        saveUsers(users);

        showMessage('regMessage', 'تم إنشاء الحساب بنجاح', 'success');

        setTimeout(() => {
            window.location.href = 'login.html';
        }, 1500);
    });
}

if (document.getElementById('loginForm')) {
    const loginForm = document.getElementById('loginForm');

    function authenticateUser(email, password) {
        const users = getUsers();
        return users.find(user => user.email === email && user.password === password);
    }

    function getSavedEmail() {
        const savedEmail = localStorage.getItem('rememberedEmail');
        if (savedEmail) {
            const emailInput = document.getElementById('loginEmail');
            const rememberCheck = document.getElementById('rememberMe');
            if (emailInput && rememberCheck) {
                emailInput.value = savedEmail;
                rememberCheck.checked = true;
            }
        }
    }

    function saveEmail(email, remember) {
        if (remember) {
            localStorage.setItem('rememberedEmail', email);
        } else {
            localStorage.removeItem('rememberedEmail');
        }
    }

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const email = document.getElementById('loginEmail').value.trim();
        const password = document.getElementById('loginPassword').value;
        const remember = document.getElementById('rememberMe').checked;

        if (!email || !password) {
            showMessage('loginMessage', 'الرجاء إدخال البريد الإلكتروني وكلمة المرور', 'error');
            return;
        }

        const user = authenticateUser(email, password);

        if (user) {
            saveEmail(email, remember);

            sessionStorage.setItem('currentUser', JSON.stringify({
                id: user.id,
                name: user.fullName,
                email: user.email
            }));

            showMessage('loginMessage', `مرحباً ${user.fullName}`, 'success');

            setTimeout(() => {
                window.location.href = 'dashboard.html';
            }, 1000);
        } else {
            showMessage('loginMessage', 'بيانات غير صحيحة', 'error');
        }
    });

    const forgotLink = document.getElementById('forgotPassword');
    if (forgotLink) {
        forgotLink.addEventListener('click', function(e) {
            e.preventDefault();
            showMessage('loginMessage', 'تم إرسال رابط الاستعادة', 'success');
        });
    }

    getSavedEmail();
}

if (document.getElementById('userName')) {
    function checkAuth() {
        const currentUser = sessionStorage.getItem('currentUser');
        if (!currentUser) {
            window.location.href = 'login.html';
            return null;
        }
        return JSON.parse(currentUser);
    }

    function displayUserInfo() {
        const user = checkAuth();
        if (user) {
            const userNameElement = document.getElementById('userName');
            const welcomeMsgElement = document.getElementById('welcomeMsg');

            if (userNameElement) {
                userNameElement.textContent = user.name;
            }
            if (welcomeMsgElement) {
                welcomeMsgElement.textContent = `مرحباً ${user.name}`;
            }
        }
    }

    function logout() {
        sessionStorage.removeItem('currentUser');
        window.location.href = 'login.html';
    }

    displayUserInfo();

    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', logout);
    }
}

function togglePasswordVisibility(inputId, toggleIconId) {
    const passwordInput = document.getElementById(inputId);
    const toggleIcon = document.getElementById(toggleIconId);

    if (passwordInput && toggleIcon) {
        toggleIcon.addEventListener('click', function() {
            const type = passwordInput.type === 'password' ? 'text' : 'password';
            passwordInput.type = type;
        });
    }
}

function deleteUserAccount(email) {
    const users = getUsers();
    const filteredUsers = users.filter(user => user.email !== email);
    saveUsers(filteredUsers);

    const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    if (currentUser && currentUser.email === email) {
        sessionStorage.removeItem('currentUser');
        window.location.href = 'login.html';
    }
}

function getUserCount() {
    return getUsers().length;
}

function getUserByEmail(email) {
    return getUsers().find(user => user.email === email);
}

function updateUserProfile(email, newData) {
    const users = getUsers();
    const index = users.findIndex(user => user.email === email);

    if (index !== -1) {
        users[index] = { ...users[index], ...newData };
        saveUsers(users);
        return true;
    }

    return false;
}