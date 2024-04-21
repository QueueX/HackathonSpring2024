package com.example.profileservice.repository

import com.example.profileservice.entity.UserEntity
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository
import java.util.UUID

@Repository
interface UserRepository: JpaRepository<UserEntity, UUID> {

    fun findUserEntityByLogin(login: String) : UserEntity

}