package com.example.authenticationservice.response

import com.example.authenticationservice.entity.Role

data class UserResponse(
    var username: String = "",
    var email: String = "",
    var role: Role? = null
)
