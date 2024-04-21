package com.example.profileservice.repository

import com.example.profileservice.entity.MembersEntity
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository
import java.util.UUID

@Repository
interface MemberRepository : JpaRepository<MembersEntity, UUID> {

    fun getMembersEntityById(id: UUID): MembersEntity

    fun deleteMembersEntityById(id: UUID)

}